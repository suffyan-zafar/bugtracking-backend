const db = require('../database');
class ProjectManager {
  static addProject(body) {
    const { title, manager_id } = body;
    console.log(title);
    return new Promise((resolve, reject) => {
      const sql_query = `INSERT INTO bugtracking.project
      (project_title,manager_id) VALUES ('${title}', ${manager_id}) `;
      db.query(sql_query, (err, res) => {
        if (err) {
          reject({
            status: 500,
            message: "Title already exist!!"
          })
        }
        resolve({
          status:201,
          message:"Project created Successfully!!"
        });
      });

    });
  };

  // static deleteProject(body) {
  //   const { project_name, manager_id } = body;
  //   return new Promise((resolve, reject) => {
  //     const sql_query = `delete from bugtracking.project where project_title= '${project_name}' and manager_id=${manager_id}`;
  //     console.log(sql_query, "query");
  //     db.query(sql_query, (err, res) => {
  //       if (err) {
  //         reject(err)
  //       }
  //       resolve(res);
  //     });
  //   });
  // };

  // static updateProject(body) {
  //   const { project_name, manager_id, new_project_title } = body;
  //   return new Promise((resolve, reject) => {
  //     const sql_query = `update bugtracking.project set project_title='${new_project_title}'  where project_title= '${project_name}' and manager_id=${manager_id}`;
  //     console.log(sql_query, "query");
  //     db.query(sql_query, (err, res) => {
  //       if (err) {
  //         reject(err)
  //       }
  //       resolve(res);
  //     });
  //   });
  // };


  static assignProject(body) {
    const {project_id,developer_id, qa_id} = body;
    const sql_query = `
    INSERT INTO bugtracking.userproject (developer_id,project_id,qa_id) VALUES ?`; 

    const values = [];
    return new Promise((resolve,reject)=>{
      for (let i = 0; i <developer_id.length; i++) {
        values.push([parseInt(developer_id[i]) ,parseInt(project_id), parseInt(qa_id[i])]);
      }
    console.log(values, "values");
    db.query(sql_query, [values], (err, res) => {
      if (err) {
          reject(err)
      }
      resolve({
        status:201,
        message:"Successfully Added!"
      })
    })
    })

  }

  static displayTotalProject(body) {
    console.log(body, "bady");
    const sql_query = `select  u.name,u.role_name, p.project_title, 
    (select u2.name from  bugtracking.users u2 where u2.user_id in (select up.developer_id from userproject up where up.project_id=p.project_id)) as developer,
    (select u2.name from  bugtracking.users u2 where u2.user_id in (select up.qa_id from userproject up where up.project_id=p.project_id)) as qa
        from bugtracking.users u join bugtracking.project p
        on u.user_id=p.manager_id where u.user_id=${body.user_id}`; 
        return new Promise((resolve,reject)=>{
          db.query(sql_query, (err,res)=>{
            if(err){
              reject(err);
            }
            resolve(res);
          })
      })
  }

  // static displayBug() {
  //   const sql_query = `select * from bug where project_id
  //    in (select project_id from bugtracking.project where manager_id=1);`;   // yaha where close mai id ka check lagy k kis manager ky project display hony
  //   db.query(sql_query, (err, res) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(res, "");
  //   })
  // }

  static getProject(body) {
    const sql_query = `SELECT * FROM bugtracking.project where manager_id=${body.user_id}`;   
    return new Promise((resolve,reject)=>{
      db.query(sql_query, (err,res)=>{
        if(err){
          reject(err);
        }
        resolve(res);
      })
  })
  }
};

module.exports = ProjectManager;