const BugManager=require("../manager/BugManager");
class BugService{
  static insertBug(){
    BugManager.insertBug();
    console.log("Bug Service");
  }
  

  static getUserProject(body){
    return BugManager.getUserProject(body);
  }
}

module.exports=BugService;