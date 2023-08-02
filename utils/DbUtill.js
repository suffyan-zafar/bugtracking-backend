const db = require("../database");
class DbUtill{
  static execQuery(sqlQuery, params){
      console.log(sqlQuery);
      console.log(params);

      return new Promise((resolve, reject) => {
        db.query(sqlQuery, params, (err, res) => {
          if (err) {
            reject({
              status: err.errno,
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
}


module.exports=DbUtill;