const UserManager = require("../manager/UserManager");
const ValidateUserToken = require("../utils/ValidateUserToken");
const AuthUtill = require("../utils/AuthUtill");
class UserService {
  static signup(name, email, password, user_type ) {
    AuthUtill.validateSignupFields(name, email, password, user_type );
    return UserManager.signup(name, email, password, user_type );
  }

  static async login(email,password ) {
    AuthUtill.validateLoginFields(email,password );
    const result = await UserManager.login(email);
    const res = await ValidateUserToken.tokenValidation(password, result);
    return res;

  }

  static getDeveloper(project_id) {
    return UserManager.getDeveloper(project_id);
  }

  static getQa(project_id){
    return UserManager.getQa(project_id);
  }

  static getDeveloperForUnassign(project_id){
    return UserManager.getDeveloperForUnassign(project_id);
  }
  


  static unAssignDeveloper(project_id, developer_id) {
    return UserManager.unAssignDeveloper(project_id, developer_id);
  }

  static getQaForUnassign(project_id){
    return UserManager.getQaForUnassign(project_id);
  }
  
  static unAssignQa(project_id, qa_id) {
    return UserManager.unAssignQa(project_id, qa_id);
  }
  
  
}

module.exports = UserService;