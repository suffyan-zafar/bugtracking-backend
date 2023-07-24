const express=require("express");
const upload=require("../../middleware/multerConfiguration")
const BugController=require('../../controller/BugController');
const router=express.Router();

router.post('/addbug', upload.single("image"), BugController.insertBug);

router.get('/getuserproject/:user_id', BugController.getUserProject);

router.get('/getprojectdeveloper/:project_id', BugController.getProjectDeveloper)

router.get('/displayBug/:user_id', BugController.displayBug);

router.get('/displayprojectwithbug/:user_id', BugController.displayProjectWithBug);

router.post('/updatebugstatus', BugController.updateBugStatus);

router.delete('/deletebug/:bug_id/:image', BugController.deleteBug);



module.exports=router;