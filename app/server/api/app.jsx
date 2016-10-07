import bcrypt from 'bcrypt-nodejs';
import crypto from 'crypto';
import express from 'express';
import jwt from 'jwt-simple';

import { COURSE_PRICE } from 'server/constants';
import db from 'server/db/db';
import { User } from 'server/db/users';
import { publicPaths } from 'server/routes';
import { addUser, logAction, handleError, sendMailgun } from 'server/utils';

const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_LIVE_KEY);

const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API, domain: 'bestactprep.co' });

// Check that user is authenticated for certain routes
router.post('/authenticate', (req, res) => {
    const token = req.body.token;
    const email = token && token !== 'undefined' && jwt.decode(token, process.env.SECRET);

    User.findOne({ email }, (err, user) => {
        if (err) return handleError(res, 'error_authenticate--findOne', err, email);

        // User is not authenticated if:
        // 1) path is not public AND
        // 2) not logged in
        // Allow access to 'password-reset' route with token
        if (!publicPaths[req.body.path] && !user && req.body.path.indexOf('password-reset') === -1) {
            res.send({ authenticated: false });
            return;
        }

        // Handle authenticated user
        req.session.user = email;
        res.send({ email, authenticated: true });
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err) return handleError(res, 'error_login--findOne', err, email);

        // Invalid email
        if (!user) {
            res.send({
                authenticated: false,
                reason: 'Email not found. Have you purchased the course?'
            });
            return;
        }
        
        // Check password
        bcrypt.compare(password, user.password, (err, authenticated) => {
            if (err) return handleError(res, 'error_login--bcrypt', err, email);

            let token;
            let userData = {};

            // Not authenticated
            if (!authenticated) {
                res.send({ authenticated });
                return;
            }

            // If authenticated, send token to stay logged in and user data
            req.session.user = email;
            token = jwt.encode(email, process.env.SECRET);
            
            logAction(res, 'Logged in', email);
            res.send({
                authenticated,
                token,
                userData: user.data
            });
        });
    });
});

router.post('/logout', (req, res) => {
    req.session.user = null;

    res.send({ loggedOut: true });
});

router.post('/buycourse', (req, res) => {
    const token = req.body.token.id;
    const email = req.body.token.email;

    // Logging for start of buying course
    logAction(res, 'User bought course - START', email);

    const MAILGUN_DATA = {
        from: 'COURSE BOUGHT <dev@bestactprep.co>',
        to: 'cheng.c.mike@gmail.com',
        subject: `COURSE BOUGHT by ${email}`,
        text: `Course bought by ${email}`
    };
    sendMailgun(MAILGUN_DATA);

    // Send payment information to Stripe
    stripe.charges.create({
        amount: COURSE_PRICE,
        currency: 'usd',
        source: token
    }, (err, charge) => {
        if (err) {
            handleError(null, 'error_stripe', err, email);
            res.send({
                success: false,
                message: 'Card declined'
            });
            return;
        }

        // Logging for successful charge
        logAction(res, 'User bought course - CHARGED, before findOne', email);

        // Handle if email already exists in database
        User.findOne({ email }, (err, result) => {
            if (err) return handleError(res, 'error_stripe--findOne', err, email);

            // If email exists, create unique email
            if (result) {
                addUser(res, req, email, true);
                return;
            }

            // Email does not exist - Correct/Normal path
            addUser(res, req, email);
        });
    });
});

router.post('/setpassword', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (!user) {
            res.send({
                success: false,
                reason: 'Email not found. Have you purchased the course?'
            });
        } else if (user.password) {
            res.send({
                success: false,
                reason: 'Password has already been set for this email. Please log in to change it.'
            });
        } else {
            bcrypt.hash(password, null, null, (err, hash) => {
                User.update({ email }, { $set: { password: hash }}, (err, userToUpdate) => {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        const token = jwt.encode(email, process.env.SECRET);

                        res.send({
                            token,
                            success: true,
                            userData: user.data
                        });
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

router.post('/passwordresetrequest', (req, res) => {
    const email = req.body.email;

    User.findOne({ email }, (err, result) => {
        if (!result) {
            res.send({
                success: false,
                message: 'Email not found. Perhaps you registered with a different email, or you have not purchased the course.'
            });
        } else {
            const hash = crypto.randomBytes(10).toString('hex');

            const MAILGUN_DATA = {
                from: 'Support <support@bestactprep.co>',
                to: email,
                subject: 'Best ACT Prep Support - Instructions for resetting your password',
                text: `To reset your password, click on the link below and then follow the instructions:

http://bestactprep.co/app/password-reset/${hash}`
            };
            mailgun.messages().send(MAILGUN_DATA, (error, body) => {
                if (error) {
                    console.log(error);
                    res.send({
                        success: false,
                        message: 'Sorry, something went wrong.'
                    });
                } else {
                    User.update({ email }, { $set: { passwordResetHash: hash }}, (err, result) => {
                        if (err) {
                            console.log(err);
                            res.send({
                                success: false,
                                message: 'Sorry, something went wrong.'
                            });
                        } else {
                            console.log(`RESET EMAIL PASSWORD SENT TO ${email}`);

                            res.send({
                                success: true,
                                message: `An email has been sent to ${email} with instructions for resetting your password. If you do not receive this email immediately, please wait up to 24 hours.`
                            });
                        }
                    });

                }
            })
        }
    });
});

router.post('/passwordreset', (req, res) => {
    const { password, email } = req.body;

    User.update({ email }, (err, result) => {
        if (!result) {
            res.send({
                success: false,
                message: 'Sorry, something went wrong. Please contact us at support@bestactprep.co, or try again.'
            });
        } else {
            bcrypt.hash(password, null, null, (err, hash) => {
                User.update({ email }, { $set: {
                    password: hash,
                    passwordResetHash: null
                }}, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({
                            success: false,
                            message: 'Sorry, something went wrong. Please contact us at support@bestactprep.co, or try again.'
                        });
                    } else {
                        console.log(`PASSWORD RESET FOR ${email}`);

                        req.session.passwordResetHashForStore = null;
                        req.session.passwordResetEmail = null;

                        res.send({
                            success: true,
                            message: 'Your password has been successfully reset. You may now log in using this new password.'
                        });
                    }
                });
            });
        }
    });
});

export default router;
