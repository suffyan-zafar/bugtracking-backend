const db = require('../database');
class BugManager{
  static insertBug(){
    const sql_query=`INSERT INTO bugtracking.bug
    (title,description,deadline,type,status,image,bug_creater_id,developer_id,project_id) VALUES
    ();
    `;
    console.log("bug manager ");
  }


  static getUserProject(body) {
    const sql_query = `select project_id, project_title from  bugtracking.project where project_id 
    in (SELECT project_id FROM bugtracking.userproject where qa_id=${body.user_id});`;   
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

module.exports=BugManager;