import bcrypt from 'bcrypt-nodejs';
import db from 'server/db/db';
import { AdminUser, User } from 'server/db/users';
import express from 'express';
const router = express.Router();

router.post('/authenticate', (req, res) => {
    if (!req.session.adminUser) {
        res.send({ authenticated: false });
    } else {
        res.send({ authenticated: true });
    }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    AdminUser.findOne({ email }, (err, user) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else if (!user) {
            res.send({
                authenticated: false,
                reason: 'User does not exist!'
            });
        } else {
            bcrypt.compare(password, user.password, (err, authenticated) => {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    req.session.adminUser = email;
                    res.send({ authenticated });
                }
            });
        }
    });
});

router.post('/logout', (req, res) => {
    req.session.adminUser = null;

    res.send({ loggedOut: true });
});

// FOR DEVELOPMENT ONLY
router.get('/delete', (req, res) => {
    User.remove({ email: 'cheng.c.mike@gmail.com' }, (err) => {
        res.send('User deleted');
    });
});

router.get('/refresh', (req, res) => {
    User.update({ email: 'cheng.c.mike@gmail.com' }, { $set: { data: initialUserData }}, (err) => {
        res.send('User data refreshed');
    });
});

export default router;
