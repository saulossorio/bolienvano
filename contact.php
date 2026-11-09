<?php
// Contact form handler (runs on Hostinger; GitHub Pages cannot run PHP).
// Sends the message to the artist by email.
// Answers 200 when sent, 400 for invalid data, 429 when one address sends too
// often, 500 if the mail server fails. Without JavaScript the browser is sent
// back to the contact page in its language (lang field), with ?sent=1 or ?error=1.
//
// Spam: the form page adds "elapsed" (seconds spent on it) with JavaScript, so a
// bot posting straight to this file is refused. Posts that look like a bot (trap
// field filled, sent in under 3 seconds, gibberish) get a normal "sent" answer but
// no email, so the bot learns nothing.
//
// Confirmation: once the message is sent, the visitor gets a short automatic email
// in the language of the page. It never repeats their name or message, so nobody
// can use the form to send their own text to someone else's address.

const RECIPIENT  = 'bolienvano@gmail.com';
const FROM       = 'bolienvano.com <no-reply@bolienvano.com>';
const MIN_SECONDS = 3;     // faster than a person can fill the form
const MAX_PER_HOUR = 5;    // messages per IP address

$isFetch = ($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'fetch';

function finish(int $status, bool $isFetch): void {
    if ($isFetch) {
        http_response_code($status);
        header('Content-Type: text/plain; charset=utf-8');
        echo $status === 200 ? 'OK' : 'Error';
    } else {
        $lang = $_POST['lang'] ?? '';
        $page = in_array($lang, ['es', 'pt'], true) ? "$lang/contact.html" : 'contact.html';
        header("Location: $page?" . ($status === 200 ? 'sent=1' : 'error=1'), true, 303);
    }
    exit;
}

// Gibberish like "NARETGR292825NEHTYHYHTR": a digit in the name, or a word of 12+
// characters mixing letters with three digits in a row (plain numbers such as a
// phone number are fine)
function looksLikeSpam(string $name, string $message): bool {
    if (preg_match('/\d/', $name)) return true;
    preg_match_all('/[A-Za-z0-9]{12,}/', "$name $message", $words);
    foreach ($words[0] as $w) {
        if (preg_match('/\d{3}/', $w) && preg_match('/[A-Za-z]/', $w)) return true;
    }
    if (preg_match_all('#https?://#i', $message) > 3) return true;
    return false;
}

// At most MAX_PER_HOUR messages an hour from one address, counted in a small file
function tooMany(string $ip): bool {
    $file = sys_get_temp_dir() . '/contact-' . md5($ip);
    $now = time();
    $times = array_filter((array) json_decode((string) @file_get_contents($file), true), fn ($t) => $t > $now - 3600);
    if (count($times) >= MAX_PER_HOUR) return true;
    $times[] = $now;
    @file_put_contents($file, json_encode(array_values($times)), LOCK_EX);
    return false;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    finish(405, $isFetch);
}

// Not sent from the page (no JavaScript, or a bot posting here directly)
if (!isset($_POST['elapsed']) || !ctype_digit((string) $_POST['elapsed'])) {
    finish(400, $isFetch);
}

// Single-line fields: remove line breaks so nobody can inject extra mail headers
$clean = fn ($value, $max) => mb_substr(trim(str_replace(["\r", "\n"], ' ', (string) $value)), 0, $max);

$name    = $clean($_POST['name'] ?? '', 256);
$email   = $clean($_POST['email'] ?? '', 256);
$work    = $clean($_POST['work'] ?? '', 256);
// Reason chosen in the form; anything unexpected counts as 'Other'
$topics  = ['buy' => 'Buy a work', 'commission' => 'Commission', 'exhibition' => 'Exhibition', 'press' => 'Press', 'other' => 'Other'];
$topic   = $topics[(string) ($_POST['topic'] ?? '')] ?? $topics['other'];
$message = mb_substr(trim((string) ($_POST['message'] ?? '')), 0, 5000);

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    finish(400, $isFetch);
}

// Looks like a bot: answer as if sent, send nothing
if (!empty($_POST['website']) || (int) $_POST['elapsed'] < MIN_SECONDS || looksLikeSpam($name, $message)) {
    finish(200, $isFetch);
}

if (tooMany($_SERVER['REMOTE_ADDR'] ?? '')) {
    finish(429, $isFetch);
}

$body = "From: $name\nEmail: $email\nAbout: $topic" . ($work !== '' ? " ($work)" : '') . "\n\n$message\n";

$headers = [
    'From'         => FROM,
    'Reply-To'     => $email,
    'Content-Type' => 'text/plain; charset=utf-8',
];

// Encoded so accented titles arrive intact in the subject line
$subject = mb_encode_mimeheader("Contact | $topic" . ($work !== '' ? " | $work" : ''), 'UTF-8');
$sent = mail(RECIPIENT, $subject, $body, $headers);

if ($sent) {
    $confirmations = [
        'en' => ['Your message to Andy Ossorio', "Hello,\n\nThank you for writing. Your message reached me and I will reply soon, usually within a few days.\n\nAndy Ossorio\nhttps://bolienvano.com\n\nThis is an automatic message: this address was used in the contact form of bolienvano.com."],
        'es' => ['Tu mensaje a Andy Ossorio', "Hola:\n\nGracias por escribir. Recibí tu mensaje y te responderé pronto, normalmente en pocos días.\n\nAndy Ossorio\nhttps://bolienvano.com/es/\n\nEste es un mensaje automático: esta dirección se usó en el formulario de contacto de bolienvano.com."],
        'pt' => ['Sua mensagem para Andy Ossorio', "Olá,\n\nObrigado por escrever. Recebi sua mensagem e responderei em breve, normalmente em poucos dias.\n\nAndy Ossorio\nhttps://bolienvano.com/pt/\n\nEsta é uma mensagem automática: este endereço foi usado no formulário de contato de bolienvano.com."],
    ];
    [$confirmSubject, $confirmBody] = $confirmations[(string) ($_POST['lang'] ?? '')] ?? $confirmations['en'];
    mail($email, mb_encode_mimeheader($confirmSubject, 'UTF-8'), $confirmBody, [
        'From'         => FROM,
        'Reply-To'     => RECIPIENT,   // a reply to the confirmation reaches the artist
        'Content-Type' => 'text/plain; charset=utf-8',
    ]);
}

finish($sent ? 200 : 500, $isFetch);
