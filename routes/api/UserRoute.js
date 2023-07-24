const express = require("express");
const UserController = require("../../controller/UserController")
const router = express.Router();

router.post("/signup", UserController.signup);

router.get('/login/:email/:password', UserController.login);

router.get('/getdeveloper/:project_id', UserController.getDeveloper);


router.get('/getqa/:project_id', UserController.getQa);

module.exports = router;