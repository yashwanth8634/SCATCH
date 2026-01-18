import bcrypt from 'bcrypt'
import userModel from '../models/user-model.js'
import generate_jsonwebtoken from '../utils/generate-jsonwebtoken.js';


export const registerUser = async function(req,res){

    try{
        const {fullname,email,password} = req.body;
        let user = await userModel.findOne({email});
        if(user) {
            req.flash("error","You already have a account,Pls Login!!")
            return res.redirect("/");
        }
        
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                if(err) return res.send(err.message);
                let user = await userModel.create({
                    fullname,
                    email,
                    password:hash,
                })
                let token = generate_jsonwebtoken(user)
                res.cookie("token",token);
                return res.redirect("/shop");
            });
        }); 
    }catch(err){
        console.log(err.message);
    }
}

export const loginUser = async function(req,res){
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            req.flash("error", "Invalid email or password");
            return res.redirect("/");
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if(!result) {
                res.status(500);
                req.flash("error", "Invalid email or password");
                return res.redirect("/");
            }
            
            const token = generate_jsonwebtoken(user);
            res.cookie("token",token);
            return res.redirect("/shop");
            });
       
    }catch(err){
        console.log(err.message);
    }
}

export const logoutUser = function(req,res){
    try{
        res.cookie("token","");
        res.redirect("/");
    }catch(err){
        console.log(err.message);
    }
}