import express from 'express';
const router = express.Router();
import isLoggedIn from '../middlewares/isLoggedIn.js'

router.get('/',function(req,res){
    const error = req.flash("error");
    const success = req.flash("success");
    res.render("index",{error,success});
})

router.get('/shop',isLoggedIn,function(req,res){
    const error = req.flash("error");
    const success = req.flash("success");
    res.render("shop",{error,success});
})




export default router;