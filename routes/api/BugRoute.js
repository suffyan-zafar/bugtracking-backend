const express=require("express");
const upload=require("../../middleware/multerConfiguration")
const bugController=require('../../controller/BugController');
const router=express.Router();

router.post('/addbug', upload.single("image"), bugController.insertBug);

router.get('/getuserproject/:user_id', bugController.getUserProject);

router.get('/getprojectdeveloper/:project_id', bugController.getProjectDeveloper)

router.get('/displayBug/:user_id/:project_id', bugController.displayBug);

router.get('/displayprojectwithbug/:project_id', bugController.displayProjectWithBug);

router.post('/updatebugstatus', bugController.updateBugStatus);

router.delete('/deletebug/:bug_id/:image', bugController.deleteBug); 

router.post('/assignProjectDeveloper', bugController.assignProjectDeveloper);

router.get('/checkBug/:developer_id/:bug_id', bugController.checkBug);

   


module.exports=router;