<?php
// Check for empty fields

if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['company']) 		||
   empty($_POST['message'])	||
   !empty($_POST['address'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = htmlspecialchars($_POST['name']);
$email_address = htmlspecialchars($_POST['email']);
$company = htmlspecialchars($_POST['company']);
$message = htmlspecialchars($_POST['message']);
$address = htmlspecialchars($_POST['address']);

// Create the email and send the message
$to = 'bdumontet@telecomdesign.fr' ; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "UK/EXPORT - New contact:  $name";
$email_body = '
  <html>
    <body>
      <p>You received a new message from the website www.vitalbase.co.uk.</p>
      <span><strong>Name</strong></span>: '.$name.'<br>
      <span><strong>Email</strong></span>: '.$email_address.'<br>
      <span><strong>Company</strong></span>: '.$company.'<br>
      <span><strong>Message</strong></span>:
      <p>'.$message.'</p>
    </body>
  </html>
'
;



$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .="Content-Transfer-Encoding: 8bit" . "\r\n";

$headers .= "From: $email_address" . "\r\n";
$headers .= "Reply-To: $email_address" . "\r\n";



 // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.



mail($to,$email_subject,$email_body,$headers);
return true;
?>
