const db=require("../database")
class ValidateProjectTitle{
  static titleValidation(body){
      const sql_query=`select * from bugtracking.project where project_title='${body.project_name}'`;
      return new Promise((resolve,reject)=>{
        db.query(sql_query, (err,ress)=>{ 
          if(ress.length==1){
            reject({
              status:404,
              message:"Project already exists!"
            });
          }
          resolve({
            status:200
          })
      })
      }); 
  }
}

module.exports=ValidateProjectTitle;