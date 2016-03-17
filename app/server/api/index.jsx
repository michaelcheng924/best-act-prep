import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
    res.send({ email: req.body.email });
});

export default router;
