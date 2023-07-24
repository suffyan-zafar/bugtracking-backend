const ProjectManager = require('../manager/ProjectManager')
class ProjectService {
  static addProject(body) {
    return ProjectManager.addProject(body);

  }

  static deleteProject(body) {
    return ProjectManager.deleteProject(body);
  }


  static assignProject(body) {
    return ProjectManager.assignProject(body);
  }


  static displayTotalProject(body) {
    return ProjectManager.displayTotalProject(body);
  }


  static getProject(body) {
    return ProjectManager.getProject(body);
  }
}


module.exports = ProjectService;