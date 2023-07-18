const express=require("express");
const UserController=require("../../controller/UserController")
const router=express.Router();
const CheckAuth=require('../../middleware/CheckAuth')

router.post("/signup", UserController.signup);

router.get('/login/:email/:password', UserController.login);

router.get('/getdeveloper', UserController.getDeveloper);


router.get('/getqa', UserController.getQa);

module.exports=router;