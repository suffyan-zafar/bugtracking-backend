const db=require("../database")
class ValidateProjectTitle{
  static titleValidation(body){
      const sql_query=`select * from bugtracking.project where project_title='${body.title}'`;
      return new Promise((resolve,reject)=>{
        db.query(sql_query, (err,ress)=>{ 
          if(ress.length==1){
            reject({
              status:500,
              message:"Project already exists!"
            });
          }
          resolve({
            message:"creating new project"
          })
      })
      }); 
  }
}

module.exports=ValidateProjectTitle;