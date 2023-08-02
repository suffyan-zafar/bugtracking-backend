const ProjectService = require("../service/ProjectService");
const HandleMysqlErrorUtill=require("../utils/HandleMysqlError");
class ProjectController {
  //Add Project
  static async addProject(req, res) {
    const {title, manager_id}=req.body;
    try {
      const response = await ProjectService.addProject(title, manager_id);
      res.status(response.status).json(response);
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while Adding New Project"
      });
    }
  }

  //Delete Project
  static async deleteProject(req, res) {
    const {project_id}=req.params;
    try {
      const response = await ProjectService.deleteProject(project_id);
      res.status(response.status).json(response);
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message:error.message || "Something went wrong while delete project"
      });
    }
  }
  //Assign Project
  static async assignProject(req, res) {
    const { project_id, developer_id, qa_id } = req.body;
    try {
      const response = await ProjectService.assignProject(project_id, developer_id, qa_id);
      res.status(response.status).json(response)
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message:error.message || "Something went wrong while assign  project"
      });
    }
  };
  // Display Project
  static async displayTotalProject(req, res) {
    const {user_id,project_id}=req.params;
    try {
      const response = await ProjectService.displayTotalProject(user_id,project_id);
      console.log(response, "response in controller");
      res.status(response.status).json(response);
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message:error.message || "Something went wrong while Total Project"
      });
    }
  }

  // display manager project 
  
  static async displayProjectAgainstManager(req, res) {
    const {user_id}=req.params;
    try {
      const response = await ProjectService.displayProjectAgainstManager(user_id);
      console.log(response, "response in controller");
      res.status(response.status).json(response);
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message:error.message || "Something went wrong while Total Project"
      });
    }
  }
  //Get Projects

  static async getProject(req, res) {
    const {user_id}=req.params;
    try {
      const response = await ProjectService.getProject(user_id);
      res.status(response.status).json(response);
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while getting Project"
      });
    }
  }
  //get project against developer
  static async getProjectAgainstDeveloper(req, res) {
    const {user_id}=req.params;
    try {
      const response = await ProjectService.getProjectAgainstDeveloper(user_id);
      res.status(response.status).json(response);
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while getting Project"
      });
    }
  }


  //get project against qa
  static async getProjectAgainstQa(req, res) {
    const {user_id}=req.params;
    try {
      const response = await ProjectService.getProjectAgainstQa(user_id);
      res.status(response.status).json(response);
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while getting Project"
      });
    }
  }
  getprojectagainstqa


  
}

module.exports = ProjectController;