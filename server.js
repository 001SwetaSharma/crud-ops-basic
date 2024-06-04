import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
const PORT = 5000;
const app = express();

app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect('mongodb://localhost:27017/basic-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDb connected');
}).catch(err => {
    console.log(`Error in Database connection... ${err}`);
})

app.listen(PORT, () => {
    console.log(`Basic-Crud-Ops is running at PORT :: ${PORT}`);
    process
    .on('unhandledRejection', (reason) => {
        console.log(`Unhandled Rejection :: ${JSON.stringify(reason)}`);
    })
    .on('uncaughtException', (err) => {
        console.log(`Uncaught Error :: ${JSON.stringify(err)}`);
    });
});