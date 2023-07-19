const express=require("express");
const BugController=require('../../controller/BugController');
const router=express.Router();

router.post('/addbug', BugController.insertBug);

router.get('/getuserproject/:user_id', BugController.getUserProject);

router.get('/getprojectdeveloper/:project_id', BugController.getProjectDeveloper)

router.get('/displayBug/:user_id', BugController.displayBug);

router.get('/displayprojectwithbug/:user_id', BugController.displayProjectWithBug);

router.post('/updatebugstatus', BugController.updateBugStatus);


module.exports=router;