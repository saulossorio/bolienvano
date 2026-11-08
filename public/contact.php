<?php
// Contact form handler (runs on Hostinger; GitHub Pages cannot run PHP).
// Sends the message to the artist by email.
// Answers 200 when sent, 400 for invalid data, 500 if the mail server fails.
// Without JavaScript the browser is sent back to contact.html?sent=1 or ?error=1.

const RECIPIENT = 'bolienvano@gmail.com';
const FROM      = 'bolienvano.com <no-reply@bolienvano.com>';

$isFetch = ($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'fetch';

function finish(int $status, bool $isFetch): void {
    if ($isFetch) {
        http_response_code($status);
        header('Content-Type: text/plain; charset=utf-8');
        echo $status === 200 ? 'OK' : 'Error';
    } else {
        header('Location: contact.html?' . ($status === 200 ? 'sent=1' : 'error=1'), true, 303);
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    finish(405, $isFetch);
}

// Spam trap: real visitors never fill this hidden field
if (!empty($_POST['website'])) {
    finish(200, $isFetch);
}

// Single-line fields: remove line breaks so nobody can inject extra mail headers
$clean = fn ($value, $max) => mb_substr(trim(str_replace(["\r", "\n"], ' ', (string) $value)), 0, $max);

$name    = $clean($_POST['name'] ?? '', 256);
$email   = $clean($_POST['email'] ?? '', 256);
$work    = $clean($_POST['work'] ?? '', 256);
// Reason chosen in the form; anything unexpected counts as 'Something else'
$topics  = ['buy' => 'Buying a work', 'commission' => 'A commission', 'exhibition' => 'An exhibition', 'press' => 'Press', 'other' => 'Something else'];
$topic   = $topics[(string) ($_POST['topic'] ?? '')] ?? $topics['other'];
$message = mb_substr(trim((string) ($_POST['message'] ?? '')), 0, 5000);

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    finish(400, $isFetch);
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
finish($sent ? 200 : 500, $isFetch);
