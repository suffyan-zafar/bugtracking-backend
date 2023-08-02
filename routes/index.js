const express=require("express");
const router=express.Router();
const userRoute=require('./api/UserRoute');
const bugRoute=require('./api/BugRoute');
const projectRoute=require('./api/ProjectRoute');


router.use('/user', userRoute);
router.use('/bug', bugRoute);
router.use('/project', projectRoute);


module.exports=router;