const UserManager=require("../manager/UserManager");
const ValidateUserToken=require("../utils/ValidateUserToken");
const EmailValidation=require('../utils/ValidateEmail');
class UserService{
  static  signup(body){
      return  UserManager.signup(body);
    // return UserManager.signup(body);
  }

  static async login(body){
    const result = await UserManager.login(body);
    return ValidateUserToken.tokenValidation(body.password, result)
   
  }

  static  getDeveloper(){
      return UserManager.getDeveloper(); 
  }


  static  getQa(){
    return UserManager.getQa(); 
}
}

module.exports=UserService;