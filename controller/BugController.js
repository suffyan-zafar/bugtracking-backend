const BugService=require("../service/BugService");
class BugController{
  static insertBug(){
    BugService.insertBug();
    console.log("bug controller");
  }
}

module.exports=BugController