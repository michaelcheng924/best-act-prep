import db from 'server/db/db';
import { User } from 'server/db/users';
import express from 'express';
const router = express.Router();

const initialUserData = {
    sections: {
        '1': { collapsed: false },
        '2': { collapsed: false },
        '3': { collapsed: false },
        '4': { collapsed: false },
        '5': { collapsed: false },
        '6': { collapsed: false },
    },
    modules: {
        '1.1': { completed: false },
        '1.2': { completed: false },
        '1.3': { completed: false },
        '1.4': { completed: false },

    }
};

router.get('/fetchdata', (req, res) => {
    console.log(req.body);
    res.send(initialUserData);
});

export default router;
