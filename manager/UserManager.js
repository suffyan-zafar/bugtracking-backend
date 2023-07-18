const bcrypt = require('bcrypt');
const db = require("../database");
class UserManager {
  static signup(body) {
    console.log(body,"Sad");
    return new Promise((resolve, reject) => {
      const { name, email, password, user_type } = body;
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          reject( {
            status: 500,
            message: "Password not converted to hash!!"
          })
        };
        const sql_query = `INSERT INTO bugtracking.users
        (name,email,password,role_name) VALUES ('${name}', '${email}', '${hash}', '${user_type}');`
        console.log(sql_query);
        db.query(sql_query, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve({
            status:201,
            message:"User created Successfully!!"
          });
        });
      })
    })
  };

 // LOgin Function

 static login(body){
  console.log(body, "bady");
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

 // get Developer


 static  getDeveloper(){
  const sql_query=`select user_id,name from bugtracking.users where role_name='developer'`;
  return new Promise((resolve,reject)=>{
      db.query(sql_query, (err,res)=>{
        if(err){
          reject(err);
        }
        resolve(res);
      })
  })
}

static  getQa(){
  const sql_query=`select user_id,name from bugtracking.users where role_name='qa'`;
  return new Promise((resolve,reject)=>{
      db.query(sql_query, (err,res)=>{
        if(err){
          reject(err);
        }
        resolve(res);
      })
  })
}
}

module.exports = UserManager;