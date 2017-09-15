<?php 

  $name = $_POST[name];
  $from = $_POST[email];
  $message = $_POST[message];

  $to = "austinbroadhead97@gmail.com"; //recipient 

  $subject = "RIA Emails"; //subject 
  $body = "Name: $name \r\n Message: $message";

  if (mail($to, $subject, $body, 'FROM:'.$from)){
    echo 'Your email has been sent!';
  } else {
    echo 'Error: something went wrong.';
  }

?>