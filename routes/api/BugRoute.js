const express=require("express");
const BugController=require('../../controller/BugController');
const router=express.Router();

router.get('/', BugController.insertBug);


module.exports=router;