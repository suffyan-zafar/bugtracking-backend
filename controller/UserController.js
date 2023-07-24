const UserService = require("../service/UserService");
class UserController {
  static async signup(req, res) {
    try {
      const response = await UserService.signup(req.body);
      res.status(response.status).json(response);

    } catch (error) {

      console.log(error, "error");
      res.status(error.status).json(error);
    }
  };

  static async login(req, res) {
    try {
      const token = await UserService.login(req.params);
      res.status(token.status).json(token);
    } catch (error) {
      console.log(error);
      res.status(error.status).json(error);
    }
  }

  static async getDeveloper(req, res) {
    try {
      const response = await UserService.getDeveloper(req.params);
      res.status(response.status).json(response);
    } catch (error) {
      res.status(error.status).json(error);
    }
  };

  static async getQa(req, res) {
    try {
      const response = await UserService.getQa(req.params);
      res.status(response.status).json(response);

    } catch (error) {
      res.status(error.code).json(error);
    }
  };
}

module.exports = UserController;