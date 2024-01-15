const AWS = require('aws-sdk');

exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    const { name, email, message } = data;

    // Set up SES
    const ses = new AWS.SES();

    // Specify your SES parameters
    const params = {
        Destination: {
            ToAddresses: ['shivamdeshmukh0009@gmail.com'], // Replace with your email address
        },
        Message: {
            Body: {
                Text: {
                    Data: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
                },
            },
            Subject: {
                Data: 'New Contact Form Submission',
            },
        },
        Source: 'your@email.com', // Replace with your email address
    };

    try {
        await ses.sendEmail(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Form submitted successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error sending email' }),
        };
    }
};
