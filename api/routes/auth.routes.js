import express from 'express';
import User from '../models/user.module.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();
router.post('/signup',async (req,res,next)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password||email===''||username===''||password===''){
        next(errorHandler(400,"All fields are required"));
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
router.post('/signin',async(req,res,next)=>{
    const {email,password} = req.body;
    if(!email||!password||email===''||password===''){
        next(errorHandler(400,'All fields are required'));
    }
    try{
        const validUser = await User.findOne({email});
        if(!validUser){
            const err = new Error();
            err.statusCode = 400;
            err.message = "Invalid email";
            next(err);
        }
        else{
            const validPassword = bcryptjs.compareSync(password,validUser?.password);
            if(!validPassword){
                const err = new Error();
                err.statusCode = 400,
                err.message = "Invalid password";
                next(err);
                return;
            }
            const token = jwt.sign(
                {
                    id:validUser._id
                },
                process.env.JWT_SECRET,
            )
            const {password:pass,...rest} = validUser._doc;
            res.status(200).cookie('access_token',token,{
                httpOnly:true
            }).json(rest);
        }
    }catch(err){
        next(err);
    }
});
export default router;