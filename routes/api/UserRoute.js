const express=require("express");
const UserController=require("../../controller/UserController")
const router=express.Router();
const CheckAuth=require('../../middleware/CheckAuth')

router.get("/signup", UserController.signup);
router.get('/login',CheckAuth, UserController.login);

module.exports=router;