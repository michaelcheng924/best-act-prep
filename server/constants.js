const MAILGUN_WELCOME_EMAIL_SUBJECT = 'Thanks for purchasing the Best ACT Prep online course!';

function MAILGUN_WELCOME_EMAIL_TEXT(email) {
    return `Thank you for choosing the Best ACT Prep online course! We are working hard to make this the absolute best ACT prep course out there.

You can log in with the following information:

Email: ${email}
Password: hungrykoala

If you would like to change your password, or if you have any trouble or questions, feel free to contact me directly at cheng.c.michael@gmail.com.

Regards,
Michael`;
}

module.exports = {
    MAILGUN_WELCOME_EMAIL_SUBJECT,
    MAILGUN_WELCOME_EMAIL_TEXT
};
