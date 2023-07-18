const UserService = require("../service/UserService");
class UserController {
  static async signup(req, res) {
    try {
     const response= await UserService.signup(req.body);
     console.log(response, "response in controlerr");
     res.json(response);

    } catch (error) {
      res.send(error);
    }
  };


  static async login(req,res){
    console.log(req.params, "params");
    try{
      const token= await UserService.login(req.params);
      res.send(token);
    }catch(error){
      res.send(error);
    }
   

  }
}

module.exports = UserController;