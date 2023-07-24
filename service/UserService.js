const UserManager = require("../manager/UserManager");
const ValidateUserToken = require("../utils/ValidateUserToken");
const AuthUtill = require("../utils/AuthUtill");
class UserService {
  static signup(body) {
    AuthUtill.validateSignupFields(body);
    return UserManager.signup(body);
  }

  static async login(body) {
    AuthUtill.validateLoginFields(body);
    const result = await UserManager.login(body);
    const res = await ValidateUserToken.tokenValidation(body.password, result);
    return res;

  }

  static getDeveloper(body) {
    return UserManager.getDeveloper(body);
  }


  static getQa(body) {
    return UserManager.getQa(body);
  }
}

module.exports = UserService;