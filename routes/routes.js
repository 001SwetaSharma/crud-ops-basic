import express from 'express';
const router = express.Router();

router.use((req, res, next) => {
    console.log('Configuring Routes.. Please Wait!');
    next();
});

router.get('/', (req,res) => {
    console.log('Routes are configured!!');
    res.send('Welcome to Basic Crud Operation!!!');
});

export default router;