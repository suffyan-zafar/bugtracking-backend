const ProjectService=require("../service/ProjectService");
class ProjectController{
  //Add Project
  static async addProject(req,res){
    try{
      const response= await ProjectService.addProject(req.body);

      res.json(response);
    }catch(error){
      res.send(error);
    }
  }

//Delete Project
  static async deleteProject(req,res){
    try{
      await ProjectService.deleteProject(req.body);
      res.status(200).json({ message: 'Project deleted successfully!!' });
    }catch(error){
      res.status(404).send(error);
    }
  }
  //Update Project
  static async updateProject(req,res){
    try{
      await ProjectService.updateProject(req.body);
      res.status(200).json({ message: 'Project updated successfully!!' });
    }catch(error){
      res.status(404).send(error);
    }
  };
//Assign Project
  static async assignProject(req,res){
    console.log(req.body,"body");
    try{
     const response= await ProjectService.assignProject(req.body);
      res.json(response)
     
    }catch(error){
      console.log(error,"errr");
      res.send(error);
    }
  };
// Display Project
  static async displayTotalProject(req,res) {
    try{
      const response= await ProjectService.displayTotalProject(req.params);
      console.log(response, "response in controller");
      res.json(response);
    }catch(error){
        res.send(error)
    }

  }



  //Get Projects

  static async getProject(req,res) {
   
    try{
      const response= await  ProjectService.getProject(req.params);
      console.log(response,"response in controler");
      res.json(response);
    }catch(error){
      res.send(error);
    }
  }
}

module.exports=ProjectController;