const bcrypt = require('bcrypt');
const db = require("../database");
const { signup, login, getDeveloper, getQa,getDeveloperForUnassign,unAssignDeveloper,getQaForUnassign,unAssignQa } = require('../utils/UserSqlQuery');
class UserManager {
  static signup(name, email, password, user_type ) {
    return new Promise((resolve, reject) => {
      const sqlQuery = signup;
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          reject({
            status: error,
            message: error.message
          })
        };
        console.log(sqlQuery);
        db.query(sqlQuery, [name, email, hash, user_type], (err, res) => {
          if (err) {
            reject({
              status: err.errno,
              message: err.message
            });
          }
          resolve({
            status: 200,
            message: "User created Successfully!!"
          });
        });
      })
    })
  };

  // LOgin Function

  static login(email) {
    const sqlQuery = login;    
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [email], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
            err: err.message
          });
        }
        if (res.length < 1) {
          reject({
            status: 400,
            message: "Auth Failed!"
          })
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }

  // get Developer


  static getDeveloper(project_id) {
    const sqlQuery = getDeveloper;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [project_id], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
            err: err.message
          });
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }

  static getQa(project_id) {
    const sqlQuery = getQa;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [project_id], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
            err: err.message
          });
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }


  static getDeveloperForUnassign(project_id) {
    const sqlQuery = getDeveloperForUnassign;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [project_id], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
            err: err.message
          });
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }

//Un Assign Developer
  static unAssignDeveloper(project_id, developer_id) {
    const sqlQuery = unAssignDeveloper;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [project_id,developer_id], (err, res) => {
        if (err) {
          console.log(err);
          reject({
            status: err.code,
            message: err.message
          })
        }
        resolve({
          status: 200,
          message: "Developer Unassign Successfully!!"
        });
      });

    });
  }


  static getQaForUnassign(project_id) {
    const sqlQuery = getQaForUnassign;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [project_id], (err, res) => {
        if (err) {
          reject({
            status: err.errno,
            err: err.message
          });
        }
        resolve({
          status: 200,
          res: res
        });
      })
    })
  }

  
  //Un Assign QA
  static unAssignQa(project_id, qa_id) {
    console.log(project_id,qa_id, "safd");
    const sqlQuery = unAssignQa;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [project_id,qa_id], (err, res) => {
        if (err) {
          console.log(err);
          reject({
            status: err.code,
            message: err.message
          })
        }
        resolve({
          status: 200,
          message: "Qa Unassign Successfully!!"
        });
      });

    });
  }
}

module.exports = UserManager;