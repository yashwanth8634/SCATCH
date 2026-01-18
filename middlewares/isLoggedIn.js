import jwt from 'jsonwebtoken';
import userModel from '../models/user-model.js';



async function isLoggedIn(req,res,next){
    if(!req.cookies.token){
        req.flash("error","you need to login first");
        return res.redirect("/");
    }

    try{
        let decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
        const user = await userModel.findOne({
            email:decoded.email
        }).select("-password");
        req.user=user;
        next();
    }catch(err){
        req.flash("error","you need to login first");
        return res.redirect("/");
    }
}

export default isLoggedIn;