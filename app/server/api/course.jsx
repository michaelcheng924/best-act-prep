import db from 'server/db/db';
import { User } from 'server/db/users';
import express from 'express';
const router = express.Router();
import moduleMappings from 'registries/module-mappings';

router.get('/fetchcoursedata', (req, res) => {
    const email = req.session.user;

    User.findOne({ email }, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            const { sections, modules, currentModule } = result.data;

            if (!currentModule) {
                result.data.currentModule = '1.0';
                User.update({ email }, { $set: { data: result } }, err => {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.send({
                            userData: {
                                sections,
                                modules,
                                currentModule: result.data.currentModule
                            }
                        });
                    }
                });
            }

            res.send({
                userData: {
                    sections,
                    modules,
                    currentModule
                }
            });
        }
    });
});

router.post('/setcurrentmodule/:id', (req, res) => {
    const currentModuleId = req.params.id;

    User.findOne({ email: req.session.user }, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            const userData = result.data;
            userData.currentModule = currentModuleId;

            if (!currentModuleId) {
                userData.currentModule = '1.0';
            }
            
            User.update({ email: req.session.user }, { $set: {data: userData } }, err => {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    res.send(userData);
                }
            });
        }
    });
});

router.post('/markcomplete/:id', (req, res) => {
    const currentModuleId = req.params.id;

    User.findOne({ email: req.session.user }, (err, result) => {
        const userData = result.data;
        let currentModule = userData.modules[currentModuleId];
        currentModule.completed = !currentModule.completed;

        let nextModule;
        if (currentModule.completed) {
            userData.currentModule = moduleMappings[currentModuleId] && moduleMappings[currentModuleId].next;

            if (!moduleMappings[currentModuleId] || !moduleMappings[currentModuleId].next) {
                userData.currentModule = '1.0';
            }
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

export default router;
