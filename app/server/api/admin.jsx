import bcrypt from 'bcrypt-nodejs';
import db from 'server/db/db';
import { AdminUser, User, LogEntry } from 'server/db/users';
import express from 'express';
const router = express.Router();
import initialUserData from 'registries/initial-user-data';

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

    // Create admin user
    // bcrypt.hash(password, null, null, (err, hash) => {
    //     const adminUser = new AdminUser({
    //         email,
    //         password: hash
    //     });

    //     adminUser.save((err, result) => {
    //         req.session.adminUser = email;
    //         res.send({
    //             email
    //         });
    //     });
    // });
});

router.post('/logout', (req, res) => {
    req.session.adminUser = null;

    res.send({ loggedOut: true });
});

router.get('/getusers', (req, res) => {
    User.find((err, results) => {
        res.send({
            users: results
        });
    });
});

router.delete('/deleteuser', (req, res) => {
    const email = req.body.email;
    User.remove({ email }, err => {
        req.session.user = null;
        res.send(`Deleted ${email}!`);
    });
});

router.post('/resetpassword', (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, null, null, (err, hash) => {
        User.update({ email }, { $set: { password: hash } }, err => {
            res.send('Password updated!');
        });
    });
});

router.post('/resetdata', (req, res) => {
    const email = req.body.email;

    User.update({ email }, { $set: { data: initialUserData } }, err => {
        res.send('User data reset!');
    });
});

router.post('/updatemodules', (req, res) => {
    const email = req.body.email;

    User.findOne({ email }, (err, user) => {
        let userData = user.data;
        if (userData.modules['2C0']) {
            console.log('User is already fully updated.');
            res.send('User is already fully updated.');
        } else {
            userData.modules['2C0'] = { completed: false };
            userData.modules['3C0'] = { completed: false };
            userData.modules['4C0'] = { completed: false };
            userData.modules['5C0'] = { completed: false };

            User.update({ email }, { $set: { data: userData } }, err => {
                console.log(email, ' - User modules updated!');
                res.send('User modules updated!');
            });
        }
    });
});

router.post('/adduser', (req, res) => {
    const { email, password } = req.body;

    if (!password) {
        const user = new User({
            email,
            data: initialUserData
        });
        user.save((err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log('NEW USER CREATED WITHOUT PASSWORD');
                res.send('New user created without password!');
            }
        });
        return;
    }

    bcrypt.hash(password, null, null, (err, hash) => {
        const user = new User({
            email,
            password: hash,
            data: initialUserData
        });
        user.save((err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(`NEW USER CREATED - ${email}`);
                res.send('New user created!');
            }
        });
    });
});

router.post('/addlog', (req, res) => {
    const { message, user } = req.body;

    console.log(`action | ${message} | ${user}`);

    const logEntry = new LogEntry({ type: 'action', message, user });

    logEntry.save((err, result) => {
        res.send('Log entry added!');
    });
});

router.get('/getlogs', (req, res) => {
    LogEntry.find({}).sort('-date').exec((err, results) => {
        res.send({
            logs: results
        });
    });
});

router.delete('/deletelog', (req, res) => {
    const _id = req.body._id;

    LogEntry.remove({ _id }, err => {
        res.send('Log deleted!');
    });
});

router.delete('/deletealllogs', (req, res) => {
    LogEntry.remove({}, err => {
        res.send('Deleted all logs!');
    });
});

export default router;
