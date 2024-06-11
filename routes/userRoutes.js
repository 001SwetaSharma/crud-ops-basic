import express from 'express';
import User from '../models/user.js';
const router = express.Router();

//create user
router.post('/user', async (req, res) => {
    try {
        let userData = new User(req.body);
        userData.userId = generateUniqueId(10);
        await userData.save();
        res.status(201).send(userData);
    } catch (err) {
        res.status(400).send(err);
    }
});


//get User
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findOne({userId: req.params.id});
        if(!user) return res.status(404).send('No user record found');

        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});


//update User
router.put('/user/:id', async (req, res) => {
    try {
        const user = await User.updateOne({userId: req.params.id}, req.body);
        if(!user.modifiedCount) return res.status(404).send('Please provide a valid User Id!');
        
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(JSON.stringify(err));
    }
});


//delete User
router.delete('/user/:id', async (req, res) => {
    try {
        const user = await User.deleteOne({ userId: req.params.id });
        console.log('for user....', user);
        if(!user.deletedCount) return res.status(404).send('No user record found');

        res.status(200).send('User Recorded Deleted Successfully');
    } catch (err) {
        res.status(400).send(err);
    }
});

function generateUniqueId(n) {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for(let i=0; i<n; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

export default router;