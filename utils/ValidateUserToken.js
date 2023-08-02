const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

class ValidateUserToken {
  static async tokenValidation(plainPassword, dbObj) {
    const response = await bcrypt.compare(plainPassword, dbObj.res[0].password)
    if (response) {
      const token = jwt.sign({
        role_name:dbObj.res[0].role_name, 
        name: dbObj.res[0].name,
        email: dbObj.res[0].email,
        user_id: dbObj.res[0].user_id
      },
       "process.env.JWT_KEY",
        { expiresIn: "1h" }
      )
      dbObj.res[0].password=undefined;
      return({
        status: 200,
        user:dbObj.res,
        token: token
      })
    }
    else{
      const err=new Error;
      err.status=400;
      err.message="Enter correct password"
      throw err;
    }

  }
}

module.exports = ValidateUserToken;