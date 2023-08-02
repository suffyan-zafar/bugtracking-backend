module.exports={
  signup:"INSERT INTO bugtracking.users (name,email,password,role_name) VALUES (?,?,?,?)",

  login:"select * from bugtracking.users where email=?",

  getDeveloper:"select user_id,name from bugtracking.users where role_name='developer' and user_id not in(select developer_id from bugtracking.userproject where project_id= ? and developer_id is not null)",

  getQa:"select user_id,name from bugtracking.users where role_name='qa' and user_id not in(select qa_id from bugtracking.userproject where project_id= ?  and qa_id is not null)",

  getDeveloperForUnassign:"select user_id,name from bugtracking.users where role_name='developer' and user_id  in(select developer_id from bugtracking.userproject where project_id= ? and developer_id is not null)",

  getQaForUnassign:"select user_id,name from bugtracking.users where role_name='qa' and user_id in(select qa_id from bugtracking.userproject where project_id= ?  and qa_id is not null)",

  unAssignDeveloper:" UPDATE bugtracking.userproject SET developer_id = NULL WHERE project_id=? and developer_id in (?)",

 unAssignQa:" UPDATE bugtracking.userproject SET qa_id = NULL WHERE project_id=? and qa_id in (?)"


 
  
}