const db=require("../database")
class ValidateEmail{
  static emailValidation(body){
  
      const sql_query=`select * from bugtracking.users where email='${body.email}'`;
      return new Promise((resolve,reject)=>{
        db.query(sql_query, (err,ress)=>{ 
          if(ress.length==1){
            reject({
              status:404,
              message:"email already exists!"
            });
          }
          resolve({
            status:200
          })
      })
      })
     
  }
}

module.exports=ValidateEmail;