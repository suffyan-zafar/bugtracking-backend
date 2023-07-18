const express=require("express");
const BugController=require('../../controller/BugController');
const router=express.Router();

router.get('/', BugController.insertBug);

router.get('/getUserProject/:user_id', BugController.getUserProject)

module.exports=router;