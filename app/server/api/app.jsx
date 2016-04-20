import bcrypt from 'bcrypt-nodejs';
import jwt from 'jwt-simple';
import db from 'server/db/db';
import { User } from 'server/db/users';
import express from 'express';
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_LIVE_KEY);
import { publicPaths } from 'server/routes';
import initialUserData from 'registries/initial-user-data';

const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API, domain: 'bestactprep.co' });
const MAILGUN_WELCOME_EMAIL_SUBJECT = 'Thanks for purchasing the Best ACT Prep online course!';
const MAILGUN_WELCOME_EMAIL_TEXT = `We are so excited that you chose the Best ACT Prep online course! We're working hard to make this the absolute best ACT prep course out there.

If you haven't done so already, please set your password at http://course.bestactprep.co/welcome.

Since the course is still in development, we apologize in advance for any problems or craziness you may experience. Feel free to contact us at support@bestactprep.co at any time for help!

Sincerely,
The Best ACT Prep Team`;

// MAILGUN SAMPLE
// const MAILGUN_DATA = {
//     from: 'Michael <michael@bestactprep.co>',
//     to: 'cheng.c.mike@gmail.com',
//     subject: 'TEST',
//     text: 'HELLO'
// };
// mailgun.messages().send(MAILGUN_DATA, (error, body) => {
//     console.log(body);
// });

router.post('/authenticate', (req, res) => {
    const email = req.body.token && jwt.decode(req.body.token, process.env.SECRET);

    User.findOne({ email }, (err, user) => {
        if (user) {
            req.session.user = email;
        }

        if (!publicPaths[req.body.path] && !req.session.user) {
            res.send({ authenticated: false });
        } else {
            res.send({ email, authenticated: true });
        }
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else if (!user) {
            res.send({
                authenticated: false,
                reason: 'Email not found. Have you purchased the course?'
            });
        } else {
            bcrypt.compare(password, user.password, (err, authenticated) => {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    req.session.user = email;

                    const token = jwt.encode(email, process.env.SECRET);

                    res.send({
                        token,
                        authenticated,
                        userData: user.data
                    });
                }
            });
        }
    });
});

router.post('/logout', (req, res) => {
    req.session.user = null;

    res.send({ loggedOut: true });
});

router.post('/buycourse', (req, res) => {
    const token = req.body.token.id;
    const email = req.body.token.email;
    const amount = req.body.amount;

    stripe.charges.create({
        amount,
        currency: 'usd',
        source: token

    }, (err, charge) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            User.findOne({ email }, (err, result) => {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    if (result) {
                        const uniqueEmail = result.email + (Math.random() * 1000);
                        const dupUser = new User({
                            email: uniqueEmail,
                            data: initialUserData
                        });
                        dupUser.save((err, result) => {
                            if (err) {
                                console.log(err);
                                res.send(err);
                            } else {
                                req.session.user = uniqueEmail;
                                res.send({
                                    email: uniqueEmail,
                                    userData: initialUserData
                                });
                            }
                        });
                    } else {
                        const user = new User({
                            email,
                            data: initialUserData
                        });
                        user.save((err, result) => {
                            if (err) {
                                console.log(err);
                                res.send(err);
                            } else {
                                const MAILGUN_DATA = {
                                    from: 'Best ACT Prep Welcome Team <welcome@bestactprep.co>',
                                    to: email,
                                    subject: MAILGUN_WELCOME_EMAIL_SUBJECT,
                                    text: MAILGUN_WELCOME_EMAIL_TEXT
                                };

                                mailgun.messages().send(MAILGUN_DATA, (error, body) => {
                                    if (error) {
                                        console.log(error);
                                    }
                                });

                                req.session.user = email;

                                const token = jwt.encode(email, process.env.SECRET);

                                res.send({
                                    token,
                                    email,
                                    userData: initialUserData
                                });
                            }
                        });
                    }
                }
            });
        }
    });
});

router.post('/setpassword', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, result) => {
        if (!result) {
            res.send({
                success: false,
                reason: 'Email not found. Have you purchased the course?'
            });
        } else if (result.password) {
            res.send({
                success: false,
                reason: 'Password has already been set for this email. Please log in to change it.'
            })
        } else {
            bcrypt.hash(password, null, null, (err, hash) => {
                User.update({ email }, { $set: { password: hash }}, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.send({ success: true });
                    }
                });
            });
        }
    });
});

router.post('/support', (req, res) => {
    const { supportTopic, email, textarea } = req.body;

    const MAILGUN_DATA = {
        from: 'Support <support@bestactprep.co>',
        to: 'cheng.c.mike@gmail.com',
        subject: `Support Request from ${email} about "${supportTopic}"`,
        text: `Support Request:

Support Topic: ${supportTopic}
Email: ${email}
Textarea: ${textarea}`
    };
    mailgun.messages().send(MAILGUN_DATA, (error, body) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            res.send({ success: true });
        }
    });
});

export default router;
