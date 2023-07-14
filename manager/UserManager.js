const bcrypt = require('bcrypt');
const db = require("../database");
class UserManager {
  static signup(body) {
    return new Promise((resolve, reject) => {
      const { name, email, password, user_type } = body;
      const sql_query = `INSERT INTO bugtracking.users
      (name,email,password,role_id) VALUES ('${name}', '${email}', '${hash}', '${2}');`
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          reject( {
            status: 500,
            message: "Password not converted to hash!!"
          })
        };
        console.log(sql_query);
        db.query(sql_query, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        });
      })
    })
  };

 // LOgin Function

 static login(body){
  const {email}=body;
  const sql_query=`select * from bugtracking.users where email='${email}'`;
  return new Promise((resolve,reject)=>{
      db.query(sql_query, (err,res)=>{
        if(err){
          reject(err);
        }
        if(res.length<1){
          reject({
            status:404,
            message:"Auth Failed!"
          })
        }
        resolve(res);
      })
  }) 
 }
}

module.exports = UserManager;