module.exports={
  signup:"INSERT INTO bugtracking.users (name,email,password,role_name) VALUES (?,?,?,?)",

  login:"select * from bugtracking.users where email=?",

  getDeveloper:"select user_id,name from bugtracking.users where role_name='developer' and user_id not in(select developer_id from bugtracking.userproject where project_id= ?)",

  getQa:"select user_id,name from bugtracking.users where role_name='qa' and user_id not in(select qa_id from bugtracking.userproject where project_id= ?)",

  
}