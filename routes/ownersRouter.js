import express from 'express';
const router = express.Router();
import ownerModel from '../models/owner-model.js'
import isLoggedIn  from '../middlewares/isLoggedIn.js'
import upload from '../config/multer-config.js'
import productModel from '../models/product-model.js'

if(process.env.NODE_ENV === "development"){
    router.post('/create',async function(req,res){
        let owners = await ownerModel.find();
        if(owners.length>0){
            return res.status(503).send("You dont have permisssion to Create owner")
        }
        
        const {fullname,email,password} = req.body;
        const createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        })
        res.send(createdOwner);
    });
};

router.get('/create',isLoggedIn,function(req,res){
    const error = req.flash("error");
    const success = req.flash("success");

    return res.render("createproducts", { error, success });
})

router.post('/create',upload.single('image'),isLoggedIn,async function(req,res){

    try{
        const {name,price,discount,bgcolor,panelcolor,textcolor} = req.body;
        const image=req.file;
        const createdProduct = await productModel.create({
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
            image:image.buffer
        });
        
        req.flash("success","Product Create Successfully");
        res.redirect("/owner/create");
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/owner/create");
    }
    
    
});

export default router;