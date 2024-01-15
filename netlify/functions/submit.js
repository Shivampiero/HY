// functions/submit.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    const data = JSON.parse(event.body);
    const { name, email, message } = data;

    const to = "shivamdeshmukh0009@gmail.com"; // Replace with your actual email address
    const subject = "New Contact Form Submission";
    const from = email;

    const text = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    const msg = {
        to,
        from,
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Form submitted successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error.response.body);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error sending email' }),
        };
    }
};
