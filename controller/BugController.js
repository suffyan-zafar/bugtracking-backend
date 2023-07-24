const BugService = require("../service/BugService");
class BugController {
  static async insertBug(req, res) {
    try {
      console.log(req.file, "origanla name");
      const response = await BugService.insertBug(req.body, req.file.filename);
      res.status(response.status).json(response)
    } catch (error) {
      console.log(error, "error");
      res.status(error.status).json(error);
    }
  }

  static async getUserProject(req, res) {
    try {
      const response = await BugService.getUserProject(req.params);
      res.status(response.status).json(response)

    } catch (error) {
      res.status(error.status).json(error);
    }
  }

  static async getProjectDeveloper(req, res) {
    try {
      const response = await BugService.getProjectDeveloper(req.params);
      res.status(response.status).json(response)

    } catch (error) {
      res.status(error.status).json(error);
    }
  }

  static async displayBug(req, res) {

    try {
      const response = await BugService.displayBug(req.params);
      res.status(response.status).json(response)

    } catch (error) {
      res.status(error.status).json(error);
    }
  }

  static async displayProjectWithBug(req, res) {
    try {
      const response = await BugService.displayProjectWithBug(req.params);
      res.status(response.status).json(response)

    } catch (error) {
      res.status(error.status).json(error);
    }
  }


  static async updateBugStatus(req, res) {
    console.log(req.body, "body");
    try {
      const response = await BugService.updateBugStatus(req.body);
      res.status(response.status).status(response.status).json(response)

    } catch (error) {
      res.status(error.status).json(error);
    }
  }

  static async deleteBug(req, res) {
    try {
      const response = await BugService.deleteBug(req.params);
      console.log(response,"response");
      res.status(response.status).json(response)

    } catch (error) {
      console.log(error, "Sadsa");
      res.status(error.status).json(error);
    }
  }
}

module.exports = BugController