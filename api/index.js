import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from './routes/user.routes.js'
dotenv.config();
import userAuth from './routes/auth.routes.js';
mongoose.connect(process.env.MONGO)
.then(
    ()=>{
        console.log("Mongo connected");
    }
)
.catch(
    (err)=>{
        console.log(err);
    }
)
const app = express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server is running on port 3000!");
});
app.use('/api/user',userRoutes);
app.use('/api/user',userAuth);