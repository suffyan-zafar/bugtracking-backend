const UserService = require("../service/UserService");
const HandleMysqlErrorUtill=require("../utils/HandleMysqlError");
class UserController {
  static async signup(req, res) {
    const { name, email, password, user_type }=req.body
    try {
      const response = await UserService.signup(name, email, password, user_type );
      console.log(response,"response in controler");
      res.status(response.status).json(response);

    } catch (error) {
      res.status(HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while create a New User"
      });
    }
  };

  static async login(req, res) {
    const { email,password } =req.body
    try {
      const token = await UserService.login(email,password);
      res.status(token.status).json(token);
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while login a User"
      });
    }
  }

  static async getDeveloper(req, res) {
    console.error(req.params, "sfsdf");
    const {project_id}=req.params;
    try {
      const response = await UserService.getDeveloper(project_id);
      res.status(response.status).json(response);
    } catch (error) {
      console.log(error, "error");
      res.status(HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while getting developer"
      });
    }
  };

  static async getQa(req, res) {
    const {project_id}=req.params;
    try {
      const response = await UserService.getQa(project_id);
      res.status(response.status).json(response);

    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while getting Qa"
      });
    }
  };


  static async getDeveloperForUnassign(req, res) {
    const {project_id}=req.params;
    try {
      const response = await UserService.getDeveloperForUnassign(project_id);
      res.status(response.status).json(response);

    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while getting Qa"
      });
    }
  };


  static async unAssignDeveloper(req, res) {
    const { project_id, developer_id } = req.body;
    try {
      const response = await UserService.unAssignDeveloper(project_id, developer_id);
      res.status(response.status).json(response)
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message:error.message || "Something went wrong while assign  project"
      });
    }
  };

  
  static async getQaForUnassign(req, res) {
    const {project_id}=req.params;
    try {
      const response = await UserService.getQaForUnassign(project_id);
      res.status(response.status).json(response);

    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while getting Qa"
      });
    }
  };
  

  static async unAssignQa(req, res) {
    const { project_id, qa_id } = req.body;
    try {
      const response = await UserService.unAssignQa(project_id, qa_id);
      res.status(response.status).json(response)
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message:error.message || "Something went wrong while assign  project"
      });
    }
  };
  
}

module.exports = UserController;