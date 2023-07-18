const BugService=require("../service/BugService");
class BugController{
  static insertBug(){
    BugService.insertBug();
    console.log("bug controller");
  }


  static async getUserProject(req,res){
    try{
      const response= await BugService.getUserProject(req.params);
      console.log(response);
        res.json(response)
      
     }catch(error){
       console.log(error,"errr");
       res.send(error);
     }
  }
}

module.exports=BugController