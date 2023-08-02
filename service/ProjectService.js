const ProjectManager = require('../manager/ProjectManager');
const ProjectUtill=require("../utils/ProjectUtill");

class ProjectService {
  static addProject(title, manager_id) {
    ProjectUtill.validateProjectTitle(title, manager_id);
    return ProjectManager.addProject(title, manager_id);

  }

  static  deleteProject(project_id) {
    return ProjectManager.deleteProject(project_id);
  }


  static assignProject(project_id, developer_id, qa_id) {
    return ProjectManager.assignProject(project_id, developer_id, qa_id);
  }


  static displayTotalProject(user_id,project_id) {
    return ProjectManager.displayTotalProject(user_id,project_id);
  }

  static displayProjectAgainstManager(user_id) {
    return ProjectManager.displayProjectAgainstManager(user_id);
  }

  
  static getProject(user_id) {
    return ProjectManager.getProject(user_id);
  }
  static getProjectAgainstDeveloper(user_id) {
    return ProjectManager.getProjectAgainstDeveloper(user_id);
  }

  static getProjectAgainstQa(user_id) {
    return ProjectManager.getProjectAgainstQa(user_id);
  }

  

  
}


module.exports = ProjectService;