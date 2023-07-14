const ProjectManager = require('../manager/ProjectManager')
const ValidateProjectTitle = require("../utils/ValidateProjectTitle");
class ProjectService {
  static async addProject(body) {
    console.log("sdsa");
    const response = await ValidateProjectTitle.titleValidation(body);
    if (response.status == 404) {
      return response;
    }
    else {
      console.log(response, "asd");
      return await ProjectManager.addProject(body);
    }
  }

  static deleteProject(body) {
    return ProjectManager.deleteProject(body);
  }

  static updateProject(body) {
    return ProjectManager.updateProject(body);
  }

  static assignProject(body){
    console.log(body,"body");
    return ProjectManager.assignProject(body);
  }
  
  
  static displayTotalProject() {
    ProjectManager.displayTotalProject();
  }
}


module.exports = ProjectService;