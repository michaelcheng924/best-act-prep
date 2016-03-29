import db from 'server/db/db';
import { User } from 'server/db/users';
import express from 'express';
const router = express.Router();
import initialUserData from 'registries/initial-user-data';

router.post('/markcomplete/:id', (req, res) => {
    const id = req.params.id;
    const module = initialUserData.modules[id];

    module.completed = !module.completed;
    res.send({ data: initialUserData });
});

export default router;
