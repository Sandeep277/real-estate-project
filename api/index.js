import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected...');
}).catch(err => console.log(err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
