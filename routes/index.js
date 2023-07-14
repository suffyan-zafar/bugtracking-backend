const express=require("express");
const router=express.Router();
const UserROute=require('./api/UserRoute');
const BugRoute=require('./api/BugRoute');
const ProjectRoute=require('./api/ProjectRoute');


router.use('/user', UserROute);
router.use('/bug', BugRoute);
router.use('/project', ProjectRoute);


module.exports=router;