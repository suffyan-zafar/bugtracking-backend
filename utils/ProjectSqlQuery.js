module.exports={

  addProject:"INSERT INTO bugtracking.project (project_title,manager_id) VALUES (?,?) ",

  deleteProject:"delete from bugtracking.project where project_id= ?",

  assignProject:" INSERT INTO bugtracking.userproject (developer_id,project_id,qa_id) VALUES ? ",

  displayProject:"SELECT DISTINCT u.name, u.role_name, p.project_title,p.project_id, d.name AS developer, q.name AS qa FROM bugtracking.users u JOIN bugtracking.project p ON u.user_id = p.manager_id LEFT JOIN userproject up_dev ON p.project_id = up_dev.project_id LEFT JOIN users d ON up_dev.developer_id = d.user_id LEFT JOIN users q ON up_dev.qa_id = q.user_id WHERE u.user_id =  ?",

  getProjectAgainstManager: "SELECT * FROM bugtracking.project where manager_id= ?"


}