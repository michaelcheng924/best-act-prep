import db from 'server/db/db';
import express from 'express';
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);
import { publicPaths } from 'server/routes';

router.post('/authenticate', (req, res) => {
    if (publicPaths[req.body.path]) {
        res.send({ authenticated: true });
    } else {
        res.send({ authenticated: false });
    }
});

router.post('/login', (req, res) => {
    res.send({ email: req.body.email });
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
            res.send({ email });
        }
    });
});

export default router;
