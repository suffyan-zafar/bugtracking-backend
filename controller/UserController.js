const UserService = require("../service/UserService");
class UserController {
  static async signup(req, res) {
    try {
     await UserService.signup(req.body);
     res.status(200).json({ message: 'User created successfully!!' });

    } catch (error) {
      res.status(404).send(error);
    }
  };


  static async login(req,res){
    try{
      const token= await UserService.login(req.body);
      res.send(token);
    }catch(error){
      res.send(error);
    }
   

  }
}

module.exports = UserController;