<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data["name"];
    $email = $data["email"];
    $message = $data["message"];

    // Replace the following with your email configuration
    $to = "shivamdeshmukh0009@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    mail($to, $subject, $body, $headers);

    $response = array("success" => true, "message" => "Form submitted successfully!");
    echo json_encode($response);
} else {
    http_response_code(405);
    echo json_encode(array("error" => "Method Not Allowed"));
}
?>
