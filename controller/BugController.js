const HandleMysqlErrorUtill=require("../utils/HandleMysqlError")
const BugService = require("../service/BugService");
class BugController {
  static async insertBug(req, res) {
    let filename;
    if (req.file && req.file.filename) {
       filename = req.file.filename;
    } else {
       filename = null;
    }
    console.log(filename);
    try {
      const response = await BugService.insertBug(req.body, filename);
      res.status(response.status).json(response)
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while Adding New bug"
      });
    }
  } 

  static async getUserProject(req, res) {
    const {user_id}=req.params;
    try {
      const response = await BugService.getUserProject(user_id);
      res.status(response.status).json(response)

    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while getting user"
      });
    }
  }

  static async getProjectDeveloper(req, res) {
    const {project_id}=req.params;
    try {
      const response = await BugService.getProjectDeveloper(project_id);
      res.status(response.status).json(response)

    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while getting project developer"
      });
    }
  }

  static async displayBug(req, res) {
    const {user_id,project_id}=req.params;
    console.log(user_id,project_id);
    try {
      const response = await BugService.displayBug(user_id,project_id);
      res.status(response.status).json(response)

    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while displaying bug"
      });
    }
  }

  static async displayProjectWithBug(req, res) {
    const {project_id}=req.params;
    try {
      const response = await BugService.displayProjectWithBug(project_id);
      res.status(response.status).json(response)

    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while display project with bug"
      });
    }
  }


  static async updateBugStatus(req, res) {
    const {status, bug_id, type}=req.body;
    console.log(req.body, "body");
    try {
      const response = await BugService.updateBugStatus(status, bug_id, type);
      res.status(response.status).status(response.status).json(response)

    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while update bug with status"
      });
    }
  }

  static async deleteBug(req, res) {
    try {
      const response = await BugService.deleteBug(req.params);
      console.log(response,"response");
      res.status(response.status).json(response)

    } catch (error) {
      console.log(error, "Sadsa");
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while delete bug"
      });
    }
  }

  static async assignProjectDeveloper(req, res) {
 
    const { project_id, bug_id, title, developer_id }= req.body
 
    console.log(req.body, "body");
    try {
      const response = await BugService.assignProjectDeveloper( project_id, bug_id, title, developer_id );
      res.status(response.status).status(response.status).json(response)
  
    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while update bug with status"
      });
    }
  }



  static async checkBug(req, res) {
    const {developer_id,bug_id}=req.params;
    try {
      const response = await BugService.checkBug(developer_id,bug_id);
      console.log(response, "Response in");
      res.status(response.status).json(response)

    } catch (error) {
      res.status( HandleMysqlErrorUtill.isValidCode(error.status) ? error.status : 500).send({
        message: error.message || "Something went wrong while displaying bug"
      });
    }
  }
}







module.exports = BugController