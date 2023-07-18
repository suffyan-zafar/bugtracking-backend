const UserManager=require("../manager/UserManager");
const ValidateUserToken=require("../utils/ValidateUserToken");
const EmailValidation=require('../utils/ValidateEmail');
class UserService{
  static async signup(body){
    
    const response= await EmailValidation.emailValidation(body);
    console.log(response, "response");
    if(response.status==500){
      return response;
    }
    else{
      console.log(response);
      return UserManager.signup(body);
    }
   
    // return UserManager.signup(body);
  }

  static async login(body){
    const result = await UserManager.login(body);
    return ValidateUserToken.tokenValidation(body.password, result)
   
  }
}

module.exports=UserService;