import express from 'express';
const router = express.Router();
import { registerUser,loginUser,logoutUser } from '../controllers/authController.js';
import isLoggedIn from '../middlewares/isLoggedIn.js'

router.get('/',function(req,res){
    res.send("User");
})

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logout',isLoggedIn,logoutUser);



export default router;