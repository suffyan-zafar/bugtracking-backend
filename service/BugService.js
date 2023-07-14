const BugManager=require("../manager/BugManager");
class BugService{
  static insertBug(){
    BugManager.insertBug();
    console.log("Bug Service");
  }
}

module.exports=BugService;