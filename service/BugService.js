const BugManager = require("../manager/BugManager");
const BugUtill = require('../utils/BugUtill');
class BugService {
  static insertBug(body ,pathName) {
    BugUtill.validateBugFields(body);
    return BugManager.insertBug(body,pathName);
  }


  static getUserProject(body) {
    return BugManager.getUserProject(body);
  }


  static getProjectDeveloper(body) {
    return BugManager.getProjectDeveloper(body);
  }


  static displayBug(body) {
    return BugManager.displayBug(body);
  }

  static displayProjectWithBug(body) {
    return BugManager.displayProjectWithBug(body);
  }

  static updateBugStatus(body) {
    return BugManager.updateBugStatus(body);
  }

  static deleteBug(body) {
    return BugManager.deleteBug(body);
  }


}

module.exports = BugService;