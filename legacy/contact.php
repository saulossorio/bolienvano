<?php $name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent="From: $name \n Subject: $subject \n Email: $email \n Message: $message";
$recipient = "bolienvano@gmail.com";
$subject = "Contact | Andy S.";
$mailheader = "From: $email\r\n";
$mailheader .= "Reply-To: $email\r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error! Please contact in a different way");
echo "Received!";
?>