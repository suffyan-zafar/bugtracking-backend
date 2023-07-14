const ProjectService=require("../service/ProjectService");
class ProjectController{
  //Add Project
  static async addProject(req,res){
    try{
      await ProjectService.addProject(req.body);
      res.status(200).json({ message: 'Project created successfully!!' });
    }catch(error){
      res.status(404).send(error);
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
      await ProjectService.assignProject(req.body);
      res.status(200).json({ message: 'Project assign successfully!!' });
    }catch(error){
      res.status(404).send(error);
    }
  };
// Display Project
  static displayTotalProject() {
    ProjectService.displayTotalProject();
  }
}

module.exports=ProjectController;