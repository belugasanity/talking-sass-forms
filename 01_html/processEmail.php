<?php
//LOAD the variables from the form
$name = $_POST[name];
$address = $_POST[address];
$email = $_POST[email];
$body = $_POST[body];


//BUILD THE EMAIL p.s. this is not to be used on real site. Very unsecure and hackable.

$to = "email@email.com";
$subject = "HTML Form Info";
$message = "$name has submitted the HTML form. $body $address";


//SEND THE EMAIL
mail($to, $subject, $message, 'FROM:'.$email);



?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<p>Thanks, for submitting your patient form .</p>

<p>We will contact you at the address below:</p>
<?php echo $address; ?> <br>
<?php echo $email; ?> <br>



</body>
</html>