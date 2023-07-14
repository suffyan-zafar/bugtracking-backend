const db = require('../database');
class ProjectManager {
  static addProject(body) {
    const { project_name, manager_id } = body;
    console.log(project_name);
    return new Promise((resolve, reject) => {
      const sql_query = `INSERT INTO bugtracking.project
      (project_title,manager_id) VALUES ('${project_name}', ${manager_id}) `;
      db.query(sql_query, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res);
      });

    });
  };

  static deleteProject(body) {
    const { project_name, manager_id } = body;
    return new Promise((resolve, reject) => {
      const sql_query = `delete from bugtracking.project where project_title= '${project_name}' and manager_id=${manager_id}`;
      console.log(sql_query, "query");
      db.query(sql_query, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res);
      });
    });
  };

  static updateProject(body) {
    const { project_name, manager_id, new_project_title } = body;
    return new Promise((resolve, reject) => {
      const sql_query = `update bugtracking.project set project_title='${new_project_title}'  where project_title= '${project_name}' and manager_id=${manager_id}`;
      console.log(sql_query, "query");
      db.query(sql_query, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res);
      });
    });
  };


  static assignProject(body) {
    const arr = body.subuser;
    const sql_query = `INSERT INTO buyhive.userproject
      (project_id,user_id) VALUES ? `;
    const values = [];
    return new Promise((resolve,reject)=>{
    // Populate the values array with rows
    arr.forEach(value => {
      values.push([1, value]);
    });
    
    db.query(sql_query, [values], (err, res) => {
      if (err) {
          reject(err)
      }
      resolve(res)
    })
    })

  }

  static displayTotalProject() {
    const sql_query = `select  u.name,(select role_title from roles r where r.role_id=u.role_id ) as role_name , p.project_title,
    (select u2.name from  bugtracking.users u2 where u2.user_id in (select up.user_id from userproject up where up.project_id=p.project_id)) as assign_to
    from bugtracking.users u join bugtracking.project p
    on u.user_id=p.manager_id;
     `;   // yaha where close mai id ka check lagy k kis manager ky project display hony
    db.query(sql_query, (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res, "");
    })
  }

  static displayBug() {
    const sql_query = `select * from bug where project_id
     in (select project_id from bugtracking.project where manager_id=1);`;   // yaha where close mai id ka check lagy k kis manager ky project display hony
    db.query(sql_query, (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res, "");
    })
  }
};

module.exports = ProjectManager;