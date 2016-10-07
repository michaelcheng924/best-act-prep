import jwt from 'jwt-simple';

import initialUserData from 'registries/initial-user-data';
import {
    MAILGUN_WELCOME_EMAIL_SUBJECT,
    MAILGUN_WELCOME_EMAIL_TEXT
} from 'server/constants';
import { LogEntry, User } from 'server/db/users';

const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API, domain: 'bestactprep.co' });

export function addUser(res, req, email, isDuplicateUser) {
    const initialMessage = isDuplicateUser
        ? 'User bought course - USER EXISTS'
        : 'User bought course - CREATE NEW USER';
    logAction(res, initialMessage, email);

    const userEmail = isDuplicateUser ? email + (Math.floor(Math.random() * 1000)) : email;

    const user = new User({
        email: userEmail,
        data: initialUserData
    });

    const errorMessage = isDuplicateUser ? 'error_stripe--saveDuplicateUser' : 'error_stripe--saveUser';
    const successMessage = isDuplicateUser
        ? 'User bought course - USER EXISTS SUCCESS'
        : 'User bought course - CREATE NEW USER SUCCESS';

    user.save((err, result) => {
        if (err) return handleError(res, errorMessage, err, email);

        // Logging for successfully creating user
        logAction(res, successMessage, userEmail);

        const MAILGUN_DATA = {
            from: 'Best ACT Prep Welcome Team <welcome@bestactprep.co>',
            to: email,
            subject: MAILGUN_WELCOME_EMAIL_SUBJECT,
            text: MAILGUN_WELCOME_EMAIL_TEXT
        };
        sendMailgun(MAILGUN_DATA);

        // Log in the user and send token to persist login
        req.session.user = userEmail;
        const token = jwt.encode(userEmail, process.env.SECRET);

        res.send({
            token,
            email: userEmail,
            userData: initialUserData
        });
    });
}

// 1. Log error
// 2. If error logging, respond with error message
export function logAction(res, message, user) {
    console.log(`action | ${message} | ${user}`);

    const logEntry = new LogEntry({
        message,
        user,
        type: 'action'
    });

    logEntry.save((err, result) => {
        if (err) {
            sendResponse(res, false, 'ERROR SAVING LOG!', true);
        }
    });
}

// 1. Log error
// 2. Save log in database
// 3. If production, send email
// 4. Respond with error message
export function handleError(res, type, err, user) {
    const stringifiedError = JSON.stringify(err);

    console.log(`${type} | ${user}`, err);

    const logEntry = new LogEntry({
        type,
        user,
        message: stringifiedError
    });

    logEntry.save((err, result) => {
        if (err) {
            sendResponse(res, false, 'ERROR SAVING LOG!', true);
        } else {
            if (process.env.NODE_ENV === 'production') {
                const MAILGUN_DATA = {
                    from: 'Logging <logging@bestactprep.com>',
                    to: 'cheng.c.mike@gmail.com',
                    subject: 'APP ERROR',
                    text: stringifiedError
                };
                mailgun.messages().send(MAILGUN_DATA, (error, body) => {
                    if (error) {
                        sendResponse(res, false, 'ERROR SENDING EMAIL FOR LOG!', true);
                    } else {
                        sendResponse(res, true, 'EMAIL FOR LOG SENT!');
                    }
                });
            }

            sendResponse(res, true, 'LOG FOR ERROR SAVED!');
        }
    });
}

function sendResponse(res, success, message, logMessage) {
    if (logMessage) {
        console.log(message);
    }

    if (res) {
        res.send({
            success,
            message
        });
        return;
    }
}

export function sendMailgun(data) {
    mailgun.messages().send(data, (error, body) => {
        if (error) handleError(null, 'error_mailgun', error, JSON.stringify(data));

        logAction(null, `Mailgun email sent to ${data.to}`, JSON.stringify(data));
    });
}
