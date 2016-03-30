import bcrypt from 'bcrypt-nodejs';
import db from 'server/db/db';
import { User } from 'server/db/users';
import express from 'express';
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);
import { publicPaths } from 'server/routes';
import initialUserData from 'registries/initial-user-data';

router.post('/authenticate', (req, res) => {
    if (!publicPaths[req.body.path] && !req.session.user) {
        res.send({ authenticated: false });
    } else {
        res.send({ authenticated: true });
    }
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
                    res.send({
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
    const token = req.body.id;
    const email = req.body.email;

    stripe.charges.create({
        amount: 5000,
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
                                req.session.user = email;
                                res.send({
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

export default router;
