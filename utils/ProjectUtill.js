class ProjectUtill{

  static  validateProjectTitle(body){
    if (!body.title) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }
  }

}


module.exports=ProjectUtill;