const express=require("express");
const ProjectController=require('../../controller/ProjectController');
const router=express.Router();


router.post('/addproject', ProjectController.addProject);


router.delete('/deleteproject/:project_id', ProjectController.deleteProject);


router.post('/assignproject', ProjectController.assignProject);

router.get('/displayproject/:user_id', ProjectController.displayTotalProject);

router.get('/getproject/:user_id', ProjectController.getProject);



module.exports=router;