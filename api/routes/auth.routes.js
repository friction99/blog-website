import express from 'express';
import User from '../models/user.module.js';
import bcryptjs from 'bcryptjs'
const router = express.Router();
router.post('/signup',async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password||email===''||username===''||password===''){
        res.sendStatus(400).json({message:'All fields are required'});
    }
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({
        username,
        email,
        password:hashedPassword
    })
    newUser.save().then(
        ()=>{
            res.send("Sign Up success");
        }
    )
    .catch(
        (err)=>{
            res.status(500).json(err.message);
        }
    )
});
export default router;