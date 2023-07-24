const db = require('../database');
const fs = require('fs');
const path = require("path");
const { displayBug, insertBug, getQaAgainstProject, getDeveloperAgainstProject,
  displayProjectWithBug, updateBugStatus, deleteBug } = require('../utils/BugSqlQuery');
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
        if (err) {
          reject({
            status: err.code,
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

  static getUserProject(body) {
    const sqlQuery = getQaAgainstProject;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [body.user_id], (err, res) => {
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

  static getProjectDeveloper(body) {
    const sqlQuery = getDeveloperAgainstProject;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [body.project_id], (err, res) => {
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

  static displayBug(body) {
    console.log(body, "bady");
    const sqlQuery = displayBug;

    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [parseInt(body.user_id)], (err, res) => {

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

  // For developer 

  static displayProjectWithBug(body) {
    const sqlQuery = displayProjectWithBug;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [body.user_id], (err, res) => {
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

  static updateBugStatus(body) {
    const sqlQuery = updateBugStatus;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [body.status, body.bug_id, body.type], (err, res) => {
        if (err) {
          reject({
            status: err.code,
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
    fs.unlinkSync(path.join(__dirname, '../images/')+ body.image);
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [parseInt(body.bug_id)], (err, res) => {
        if (err) {
          reject({
            status: err.code,
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

}

module.exports = BugManager;