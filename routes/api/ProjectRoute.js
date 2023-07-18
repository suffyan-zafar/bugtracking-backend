const express=require("express");
const ProjectController=require('../../controller/ProjectController');
const router=express.Router();


router.post('/addproject', ProjectController.addProject);


router.delete('/deleteproject', ProjectController.deleteProject);

router.put('/updateproject', ProjectController.updateProject);

router.post('/assignproject', ProjectController.assignProject);

router.get('/displayproject/:user_id', ProjectController.displayTotalProject);

router.get('/getproject/:user_id', ProjectController.getProject);



module.exports=router;