<?php
// Initialize a counter for retry attempts
$max_attempts = 3;
$attempt = 0;

// Loop until a valid POST request is detected or max attempts are reached
while ($attempt < $max_attempts && $_SERVER["REQUEST_METHOD"] !== "POST") {
    $attempt++;
    // Wait a little before retrying
    sleep(1);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assign form fields to variables
    $name = htmlspecialchars(stripslashes(trim($_POST['name'])));
    $email = htmlspecialchars(stripslashes(trim($_POST['email'])));
    $message = htmlspecialchars(stripslashes(trim($_POST['message'])));
    
    // Set the recipient email address
    $to = 'nymur@vasonite.com'; // 
    // Subject of the email
    $subject = 'New Contact Form Submission';
    
    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>";
    
    // Check if fields are empty and validate the email
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please ensure all fields are filled out correctly.";
    } else {
        // Attempt to send the email up to 3 times
        $email_attempts = 0;
        $email_sent = false;
        while ($email_attempts < 3 && !$email_sent) {
            if (mail($to, $subject, $email_content, $headers)) {
                $email_sent = true;
                header('Location: thanks.html');
                exit; 
            }
            $email_attempts++;
        }
        if (!$email_sent) {
            echo "Failed to send your message after several attempts. Please try again later. <a href='contact.html'>Go back</a>";
            exit;
        }
    }
} else {
    // If still not POST after max attempts, set a 403 (forbidden) response code and show an error
    http_response_code(403);
    echo "My website server is very slow sorry! ";
    echo "go back > resend the message  ( the message is saved , so no need to rewrite it)";
    echo "or you can mail me at nymur@vasonite.com";
}
?>
