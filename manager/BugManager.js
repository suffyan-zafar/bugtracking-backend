const db = require('../database');
class BugManager{
  static insertBug(body){
    console.log(body.deadline,"deadline");
    const sql_query=`INSERT INTO bugtracking.bug
    (title,description,deadline,type,status,image,bug_creater_id,developers_id,projects_id) VALUES
    ('${body.title}', '${body.description}', '${body.deadline}', '${body.type}', '${body.status}', '${body.image || null}' ,${parseInt(body.bug_creater)},${ parseInt(body.developer)}, ${parseInt(body.project)})`;
    console.log(sql_query,"query");
    return new Promise((resolve,reject)=>{
      db.query(sql_query, (err,res)=>{
        if(err){
          reject({
            status: 500,
            message: "Title Already Exist!!"
          });
        }
        resolve({
          status:201,
          message:"successfull bug created!!"
        });
      })
    })
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

  static getProjectDeveloper(body) {

    const sql_query = `SELECT user_id,name FROM bugtracking.users where user_id in 
    (select developer_id from bugtracking.userproject where project_id=${body.project_id});`;   
    return new Promise((resolve,reject)=>{
      db.query(sql_query, (err,res)=>{
        if(err){
          reject(err);
        }
        resolve(res);
      })
  })
  }

  static displayBug(body) {
    const sql_query = `  select (select u.name from bugtracking.users u where u.user_id=b.bug_creater_id) as creater_name,
    (select p.project_title from bugtracking.project p where p.project_id=b.projects_id) as project_name,
  b.title,b.description,b.deadline, b.type,b.status,
  (select u.name from bugtracking.users u where u.user_id=b.developers_id) as developer_name
  from bugtracking.bug b where b.bug_creater_id=${body.user_id}`;   
    return new Promise((resolve,reject)=>{
      db.query(sql_query, (err,res)=>{
        if(err){
          reject(err);
        }
        resolve(res);
      })
  })
  }

  // For developer 

  static displayProjectWithBug(body) {
    const sql_query = `SELECT (select p.project_title from bugtracking.project p where p.project_id=b.projects_id) as project_name,
    b.title,b.description,b.deadline, b.type,b.status,
    (select u.name from bugtracking.users u where u.user_id=b.bug_creater_id) as creater_name
    FROM bugtracking.bug b where b.developers_id=${body.user_id}`;   
    return new Promise((resolve,reject)=>{
      db.query(sql_query, (err,res)=>{
        if(err){
          reject(err);
        }
        resolve(res);
      })
  })
  }

  static updateBugStatus(body) {
    const sql_query = `UPDATE bugtracking.bug SET status = '${body.status}'
      WHERE developers_id=${body.user_id} and  type='${body.type}' `;   
      console.log(sql_query, "query");
    return new Promise((resolve,reject)=>{
      db.query(sql_query, (err,res)=>{
        if(err){
          reject(err);
        }
        resolve({
          status:201,
          message:"successfull status updated!!"
        });
      })
  })
  }
}

module.exports=BugManager;