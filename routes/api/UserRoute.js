const express = require("express");
const userController = require("../../controller/UserController")
const router = express.Router();

router.post("/signup", userController.signup);

router.post('/login', userController.login);

router.get('/getdeveloper/:project_id', userController.getDeveloper);


router.get('/getqa/:project_id', userController.getQa);


router.get('/getdeveloperforunassign/:project_id', userController.getDeveloperForUnassign);

router.post('/unassigndeveloper', userController.unAssignDeveloper);


router.get('/getqaforunassign/:project_id', userController.getQaForUnassign);

router.post('/unassignqa', userController.unAssignQa);


module.exports = router;