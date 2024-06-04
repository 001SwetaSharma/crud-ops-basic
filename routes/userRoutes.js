import express from 'express';
import User from '../models/user.js';
const router = express.Router();


//create user
router.post('/user', async (req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).send(userData);
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;