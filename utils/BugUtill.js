class BugUtill{
  static validateBugFields(body){
      console.log(body);  
      if(!body.title){
        throw {
          status: 400,
          message: "Invalid Parameters"
        }
      }
      if(!body.description){
        throw {
          status: 400,
          message: "Invalid Parameters"
        }
      }
      if(!body.deadline){
        throw {
          status: 400,
          message: "Invalid Parameters"
        }
      }
      if(!body.type){
        throw {
          status: 400,
          message: "Invalid Parameters"
        }
      }
      if(!body.status){
        throw {
          status: 400,
          message: "Invalid Parameters"
        }
      } 
      if(!body.bug_creater){
        throw {
          status: 400,
          message: "Invalid Parameters"
        }
      } 
      if(!body.developer){
        throw {
          status: 400,
          message: "Invalid Parameters"
        }
      }
      if(!body.project){
        throw {
          status: 400,
          message: "Invalid Parameters"
        }
      }
  }
}

module.exports=BugUtill;