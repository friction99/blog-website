import express from 'express';
import User from '../models/user.module.js';
import bcryptjs from 'bcryptjs'
const router = express.Router();
router.post('/signup',async (req,res,next)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password||email===''||username===''||password===''){
        res.sendStatus(400).json({message:'All fields are required'});
    }
    const hashedPassword = bcryptjs.hashSync(password);
    const newUser = new User({
        username,
        email,
        password:hashedPassword
    })
    newUser.save().then(
        ()=>{
            res.json({message:"SingUp Success"});
        }
    )
    .catch(
        (err)=>{
            next(err);
        }
    )
});
export default router;