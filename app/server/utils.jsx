import { LogEntry } from 'server/db/users';

const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API, domain: 'bestactprep.co' });

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
