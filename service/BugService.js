const BugManager=require("../manager/BugManager");
class BugService{
  static insertBug(body){
    return BugManager.insertBug(body);
  }
  

  static getUserProject(body){
    return BugManager.getUserProject(body);
  }


  static getProjectDeveloper(body){
    return BugManager.getProjectDeveloper(body);
  }


  static displayBug(body){
    return BugManager.displayBug(body);
  }

  static displayProjectWithBug(body){
    return BugManager.displayProjectWithBug(body);
  }

  static updateBugStatus(body){
    return BugManager.updateBugStatus(body);
  }

  
}

module.exports=BugService;