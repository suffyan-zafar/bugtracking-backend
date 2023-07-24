const ProjectService = require("../service/ProjectService");
class ProjectController {
  //Add Project
  static async addProject(req, res) {
    try {
      const response = await ProjectService.addProject(req.body);
      res.status(response.status).json(response);
    } catch (error) {
      res.status(error.status).json(error);
    }
  }

  //Delete Project
  static async deleteProject(req, res) {
    try {
      const response = await ProjectService.deleteProject(req.params);
      res.status(response.status).json(response);
    } catch (error) {
      res.json(error);
    }
  }
  //Assign Project
  static async assignProject(req, res) {
    try {
      const response = await ProjectService.assignProject(req.body);
      res.status(response.status).json(response)
    } catch (error) {
      console.log(error, "errr");
      res.status(error.status).json(error);
    }
  };
  // Display Project
  static async displayTotalProject(req, res) {
    try {
      const response = await ProjectService.displayTotalProject(req.params);
      console.log(response, "response in controller");
      res.status(response.status).json(response);
    } catch (error) {
      res.status(error.status).json(error)
    }
  }
  //Get Projects

  static async getProject(req, res) {

    try {
      const response = await ProjectService.getProject(req.params);
      res.status(response.status).json(response);
    } catch (error) {
      res.status(error.status).json(error);
    }
  }
}

module.exports = ProjectController;