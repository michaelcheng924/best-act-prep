import { LogEntry } from 'server/db/users';

function handleError(res, type, err, user) {
    const stringifiedError = JSON.stringify(err);

    console.log(`${type} | ${stringifiedError} | ${user}`);

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
    }
}

export { handleError };
