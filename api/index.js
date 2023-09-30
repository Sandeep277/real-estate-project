import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected...');
}).catch(err => console.log(err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
