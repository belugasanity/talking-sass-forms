<?php
//LOAD the variables from the form
$fullname = $_POST[fullname];
$address = $_POST[address];
$email = $_POST[email];




//BUILD THE EMAIL p.s. this is not to be used on real site. Very unsecure and hackable.

$to = "mike-cowley@hotmail.com";
$subject = "$fullname Patient Info";
$message = "$fullname has submitted the personal information listed below.;

//SEND THE EMAIL
mail($to, $subject, $message, 'FROM:'.$email)



?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<p>Thanks, <?php echo $fullname; ?> for submitting your information.</p>

<p>We will contact you at the address below:</p>
<?php echo $address; ?> <br>
<?php echo $email; ?>



</body>
</html>