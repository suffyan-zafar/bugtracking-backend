const db = require('../database');
const { addProject, deleteProject, assignProject,
  displayProject, getProjectAgainstManager,getProjectAgainstDeveloper,getProjectAgainstQa } = require('../utils/ProjectSqlQuery');
class ProjectManager {
  static addProject(title, manager_id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = addProject;
      db.query(sqlQuery, [title, manager_id], (err, res) => {
        if (err) {
          reject({
            status: err.code,
            message: err.message
          })
        }
        resolve({
          status: 200,
          message: "Project created Successfully!!"
        });
      });

    });
  }

  static deleteProject(project_id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = deleteProject;
      console.log(sqlQuery, "query");
      db.query(sqlQuery, [parseInt(project_id)], (err, res) => {
        if (err) {
          console.log(err,"err from mysql");
          reject({
            status: err.errno,
            message: err.message
          })
        }
        resolve({
          status: 200,
          message: "Project Deleted Successfully!!"
        });
      });
    });
  };



  static assignProject(project_id, developer_id, qa_id) {
    const sqlQuery = assignProject;
    console.log(developer_id);
    console.log(qa_id);
    const values = [];
    const newArr = developer_id;
    const newArr2 = qa_id;

    return new Promise((resolve, reject) => {
      if (newArr.length > newArr2.length) {
        for (let i = 0; i < newArr.length; i++) {
          const value1 = newArr[i];
          const value2 = newArr2[i] !== undefined ? newArr2[i] : newArr2[i - 1];   //newArr2[i-1] 
          values.push([value1, parseInt(project_id), value2]);
        }
      }
      else if (newArr2.length > newArr.length) {
        for (let i = 0; i < newArr2.length; i++) {
          const value1 = newArr[i] !== undefined ? newArr[i] : newArr[i - 1];   //newArr[i-1]
          const value2 = newArr2[i];
          values.push([value1, parseInt(project_id), value2]);
        }
      }
      else {
        for (let i = 0; i < newArr.length; i++) {
          console.log(newArr[i], "developer id");
          console.log(newArr2[i], "qa id");
          values.push([newArr[i], parseInt(project_id), newArr2[i]]);
        }
      }
      db.query(sqlQuery, [values], (err, res) => {
        if (err) {
          reject({
            status: err.code,
            message: err.message
          })
        }
        resolve({
          status: 200,
          message: "Successfully Assigned!"
        })
      })
    })

  }

  static displayTotalProject(user_id,project_id) {
    const sqlQuery = displayProject;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [parseInt(user_id), project_id], (err, res) => {
        if (err) {
          reject({
            status: err.code,
            message: err.message
          });
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }

  static displayProjectAgainstManager(user_id) {
    console.log(user_id, "id");
    const sqlQuery = getProjectAgainstManager;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [parseInt(user_id)], (err, res) => {
        if (err) {
          reject({
            status: err.code,
            message: err.message
          });
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }
  

  static getProject(user_id) {
    const sqlQuery = getProjectAgainstManager;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [user_id], (err, res) => {
        if (err) {
          reject({
            status: err.code,
            message: err.message
          });
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }


  static getProjectAgainstDeveloper(user_id) {
    const sqlQuery = getProjectAgainstDeveloper;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [user_id], (err, res) => {
        console.log(sqlQuery,"query");
        console.log(res,"res");
        if (err) {
          reject({
            status: err.code,
            message: err.message
          });
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }

  static getProjectAgainstQa(user_id) {
    const sqlQuery = getProjectAgainstQa;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [user_id], (err, res) => {
        console.log(sqlQuery,"query");
        console.log(res,"res");
        if (err) {
          reject({
            status: err.code,
            message: err.message
          });
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }


  
  
};

module.exports = ProjectManager;