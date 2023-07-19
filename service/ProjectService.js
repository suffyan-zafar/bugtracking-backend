const ProjectManager = require('../manager/ProjectManager')
const ValidateProjectTitle = require("../utils/ValidateProjectTitle");
class ProjectService {
  static  addProject(body) {
      return  ProjectManager.addProject(body);
    
  }

  static deleteProject(body) {
    return ProjectManager.deleteProject(body);
  }

  static updateProject(body) {
    return ProjectManager.updateProject(body);
  }

  static assignProject(body){
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