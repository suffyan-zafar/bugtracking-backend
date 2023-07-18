const express=require("express");
const router=express.Router();
const UserRoute=require('./api/UserRoute');
const BugRoute=require('./api/BugRoute');
const ProjectRoute=require('./api/ProjectRoute');


router.use('/user', UserRoute);
router.use('/bug', BugRoute);
router.use('/project', ProjectRoute);


module.exports=router;