const BugService=require("../service/BugService");
class BugController{
  static async insertBug(req,res){
    try{
      const response= await BugService.insertBug(req.body);
      console.log(response);
      res.json(response)
     }catch(error){
       res.send(error);
     }
  }


  static async getUserProject(req,res){
    try{
      const response= await BugService.getUserProject(req.params);
      console.log(response);
        res.json(response)
      
     }catch(error){

       res.send(error);
     }
  }

  static async getProjectDeveloper(req,res){
    try{
      const response= await BugService.getProjectDeveloper(req.params);
      console.log(response);
       res.json(response)
      
     }catch(error){
       res.send(error);
     }
  }

  static async displayBug(req,res){
    try{
      const response= await BugService.displayBug(req.params);
      console.log(response);
       res.json(response)
      
     }catch(error){
       res.send(error);
     }
  }

  static async displayProjectWithBug(req,res){
    try{
      const response= await BugService.displayProjectWithBug(req.params);
      console.log(response);
       res.json(response)
      
     }catch(error){
       res.send(error);
     }
  }


  static async updateBugStatus(req,res){
    console.log(req.body);
    try{
      const response= await BugService.updateBugStatus(req.body);
      console.log(response);
       res.json(response)
      
     }catch(error){
       res.send(error);
     }
  }

  

  
  
}

module.exports=BugController