import db from 'server/db/db';
import { User } from 'server/db/users';
import express from 'express';
const router = express.Router();
import moduleMappings from 'registries/module-mappings';

router.post('/markcomplete/:id', (req, res) => {
    const currentModuleId = req.params.id;

    User.findOne({ email: req.session.user }, (err, result) => {
        const userData = result.data;
        let currentModule = userData.modules[currentModuleId];
        currentModule.completed = !currentModule.completed;

        let nextModule;
        if (currentModule.completed) {
            userData.currentModule = moduleMappings[currentModuleId].next;
        }

        User.update({ email: req.session.user }, { $set: { data: userData } }, err => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send({ userData });
            }
        });
    });
});

router.post('/setnextmodule/:id', (req, res) => {
    const currentModuleId = req.params.id;

    User.findOne({ email: req.session.user }, (err, result) => {
        const userData = result.data;
        userData.currentModule = moduleMappings[currentModuleId].next;

        User.update({ email: req.session.user }, { $set: { data: userData } }, err => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send({ currentModule: userData.currentModule });
            }
        })
    });
});

export default router;
