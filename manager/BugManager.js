const db = require('../database');
const fs = require('fs');
const path = require("path");
const { displayBug, insertBug, getQaAgainstProject, getDeveloperAgainstProject,
  displayProjectWithBug, updateBugStatus, deleteBug,assignProjectDeveloper,checkBug } = require('../utils/BugSqlQuery');
class BugManager {
  static insertBug(body, pathName) {
    console.log(pathName, "pathName");
    const sqlQuery = insertBug;
    const values = [
      body.title,
      body.description,
      body.deadline,
      body.type,
      body.status,
      pathName || null,
      body.bug_creater,
      body.developer,
      body.project,
    ];

    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [values], (err, res) => {
        console.log(res,"res");
        if (err) {
          reject({
            status: err.errno,
            message: err.message
          });
        }
        resolve({
          status: 201,
          message: "successfull bug created!!"
        });
      })
    })
  }

  static getUserProject(user_id) {
    const sqlQuery = getQaAgainstProject;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [user_id], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
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

  static getProjectDeveloper(project_id) {
    console.log(project_id, "id");
    const sqlQuery = getDeveloperAgainstProject;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [project_id], (err, res) => {
        console.log(sqlQuery,"wuery");
        if (err) {
          reject({
            status: err.errno,
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

  static displayBug(user_id,project_id) {
    const sqlQuery = displayBug;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [parseInt(user_id),project_id], (err, res) => {

        if (err) {
          reject({
            status: err.errno,
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

  // For developer 

  static displayProjectWithBug(project_id) {
    console.log(project_id);
    const sqlQuery = displayProjectWithBug;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [project_id], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
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

  static updateBugStatus(status, bug_id, type) {
    const sqlQuery = updateBugStatus;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [status, bug_id, type], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
            message: err.message
          });
        }
        resolve({
          status: 200,
          message: "successfull status updated!!"
        });
      })
    })
  }

  static deleteBug(body) {
    const sqlQuery = deleteBug;
  
    const img=body.image;
    console.log(img,"imae");
    if(img != "null"){
      console.log("in iffaaaaaa");
      fs.unlinkSync(path.join(__dirname, '../images/')+ body.image);
    }
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [parseInt(body.bug_id)], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
            message: err.message
          });
        }
        resolve({
          status: 200,
          message: "successfull bug deleted!!"
        });
      })
    })
  }


  static assignProjectDeveloper( project_id, bug_id, title, developer_id ) {

    const sqlQuery = assignProjectDeveloper;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [developer_id,bug_id,title, project_id ], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
            message: err.message
          });
        }
        resolve({
          status: 200,
          message: "successfull assign developer!!"
        });
      })
    })
  }


  static checkBug(developer_id,bug_id) {
    const sqlQuery = checkBug;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [bug_id,developer_id], (err, res) => {
        console.log(res);
        if (err) {
          reject({
            status: err.errno,
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


  
  
}

module.exports = BugManager;