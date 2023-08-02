const express=require("express");
const projectController=require('../../controller/ProjectController');
const router=express.Router();


router.post('/addproject', projectController.addProject);


router.delete('/deleteproject/:project_id', projectController.deleteProject);


router.post('/assignproject', projectController.assignProject);

router.get('/displayproject/:user_id/:project_id', projectController.displayTotalProject);

router.get('/getproject/:user_id', projectController.getProject);

router.get('/getprojectagainstdeveloper/:user_id', projectController.getProjectAgainstDeveloper);

router.get('/getprojectagainstqa/:user_id', projectController.getProjectAgainstQa);

router.get('/displayprojectagainstmanager/:user_id', projectController.displayProjectAgainstManager);







module.exports=router;