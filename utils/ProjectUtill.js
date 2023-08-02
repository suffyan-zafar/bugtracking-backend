class ProjectUtill{
  static  validateProjectTitle(title){
    if (!title) {
      throw {
        status: 400,
        message: "Invalid Parameters"
      }
    }
  }

}


module.exports=ProjectUtill;