const BugManager = require("../manager/BugManager");
const BugUtill = require('../utils/BugUtill');
class BugService {
  static insertBug(body ,pathName) {
    BugUtill.validateBugFields(body);
    return BugManager.insertBug(body,pathName);
  }


  static getUserProject(user_id) {
    return BugManager.getUserProject(user_id);
  }


  static getProjectDeveloper(project_id) {
    return BugManager.getProjectDeveloper(project_id);
  }


  static displayBug(user_id,project_id) {
    return BugManager.displayBug(user_id,project_id);
  }

  static displayProjectWithBug(project_id) {
    return BugManager.displayProjectWithBug(project_id);
  }

  static updateBugStatus(status, bug_id, type) {
    return BugManager.updateBugStatus(status, bug_id, type);
  }

  static deleteBug(body) {
    return BugManager.deleteBug(body);
  }

  static assignProjectDeveloper( project_id, bug_id, title, developer_id ) {
    return BugManager.assignProjectDeveloper( project_id, bug_id, title, developer_id );
  }


  static checkBug(developer_id,bug_id) {
    return BugManager.checkBug(developer_id,bug_id);
  }
  

}

module.exports = BugService;