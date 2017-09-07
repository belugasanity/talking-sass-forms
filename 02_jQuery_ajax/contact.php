<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "mike-cowley@hotmail.com";

        // Set the email subject.
        $subject = "New contact from $name";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>







//<?php
//// process.php
//
//$errors         = array();      // array to hold validation errors
//$data           = array();      // array to pass back data
//
//// validate the variables ======================================================
//    // if any of these variables don't exist, add an error to our $errors array
//
//    if (empty($_POST['name']))
//        $errors['name'] = 'Name is required.';
//
//    if (empty($_POST['address']))
//        $errors['address'] = 'Address is required.';
//
//    if (empty($_POST['from']))
//        $errors['from'] = 'Email is required.';
//
////    if (empty($_POST['body']))
////         $errors['body'] = 'Body is required.';
//
//// return a response ===========================================================
//
//    // if there are any errors in our errors array, return a success boolean of false
//    if ( ! empty($errors)) {
//
//        // if there are items in our errors array, return those errors
//        $data['success'] = false;
//        $data['errors']  = $errors;
//    } else {
//
//        // if there are no errors process our form, then return a message
//        $to("mike-cowley@hotmail.com");
//        $subject = "AJAX Form Info";
//        $message = "$name has submitted the AJAX form. $body $address";
//
//        mail($to, $subject, $message, 'FROM:'.$email);
//
//        // DO ALL YOUR FORM PROCESSING HERE
//        // THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)
//
//        // show a message of success and provide a true success variable
//        $data['success'] = true;
//        $data['message'] = 'Success!';
//    }
//
//    // return all our data to an AJAX call
//    echo json_encode($data);
//







//<?php
//
//  $name = $_REQUEST['name'];
//  $from = $_REQUEST['from'];
//  $body = $_REQUEST['body'];
//
//  $to = "mike-cowley@hotmail.com"; //recipient
//
//  $subject = "RIA Emails"; //subject
//  $header = "From: ". $name . " <" . $from . ">\r\n";
//
//  if (mail($to, $subject, $body, $header)){
//    echo 'Your email has been sent!';
//  } else {
//    echo 'Error: something went wrong.';
//  }
//
//?>
