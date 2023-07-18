const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

class ValidateUserToken {
  static tokenValidation(plainPassword, dbObj) {
    console.log(plainPassword, dbObj[0], "asdasd");
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainPassword, dbObj[0].password).then((result)=>{
        if (result) {
          const token = jwt.sign({
            role_name:dbObj[0].role_name,
            name: dbObj[0].name,
            email: dbObj[0].email,
            user_id: dbObj[0].user_id
          },
           "process.env.JWT_KEY",
            { expiresIn: "1h" }
          )
          dbObj[0].password=undefined;
          resolve({
            status: 200,
            user:dbObj,
            token: token
          })
        }
        else{
          reject({
            status: 401,
            message: "Enter correct password"
          })
        }
      })
    
     
    })
  }
}

module.exports = ValidateUserToken;