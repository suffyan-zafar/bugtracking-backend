const bcrypt = require('bcrypt');
const db = require("../database");
const { signup, login, getDeveloper, getQa } = require('../utils/UserSqlQuery');
class UserManager {
  static signup(body) {
    return new Promise((resolve, reject) => {
      const { name, email, password, user_type } = body;
      const sqlQuery = signup;
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          reject({
            status: err.code,
            message: error.message
          })
        };
        console.log(sqlQuery);
        db.query(sqlQuery, [name, email, hash, user_type], (err, res) => {
          if (err) {
            reject({
              status: err.code,
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

  static login(body) {
    const { email } = body;
    const sqlQuery = login;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [email], (err, res) => {
        if (err) {
          reject({
            status: err.code,
            err: err.message
          });
        }
        if (res.length < 1) {
          reject({
            status: 401,
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


  static getDeveloper(body) {
    const sqlQuery = getDeveloper;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [body.project_id], (err, res) => {
        if (err) {
          reject({
            status: err.code,
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

  static getQa(body) {
    const sqlQuery = getQa;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [body.project_id], (err, res) => {
        if (err) {
          reject({
            status: err.code,
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
}

module.exports = UserManager;