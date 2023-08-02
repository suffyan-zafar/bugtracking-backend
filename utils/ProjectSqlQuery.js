module.exports={

  addProject:"INSERT INTO bugtracking.project (project_title,manager_id) VALUES (?,?) ",

  deleteProject:"delete from bugtracking.project where project_id= ?",

  assignProject:" INSERT INTO bugtracking.userproject (developer_id,project_id,qa_id) VALUES ? ",

  displayProject:"SELECT u.name, u.role_name, p.project_title, p.project_id, GROUP_CONCAT(DISTINCT d.name) AS developer, GROUP_CONCAT(DISTINCT q.name) AS qa FROM bugtracking.users u JOIN bugtracking.project p ON u.user_id=p.manager_id LEFT JOIN userproject up_dev ON p.project_id = up_dev.project_id LEFT JOIN users d ON up_dev.developer_id=d.user_id LEFT JOIN  users q ON up_dev.qa_id = q.user_id WHERE  u.user_id = ? and p.project_id=?  GROUP BY u.name,  u.role_name, p.project_title,p.project_id",

  

  getProjectAgainstManager: "SELECT * FROM bugtracking.project where manager_id= ?",

  getProjectAgainstDeveloper: " SELECT  up.project_id, u.name, (select distinct project_title from bugtracking.project p where p.project_id=up.project_id) as project_name,(select distinct u2.name from bugtracking.users u2 where u2.user_id in (select distinct p2.manager_id from bugtracking.project p2 where p2.project_id=up.project_id)) as manager_name FROM bugtracking.userproject up  inner join  bugtracking.users u on up.developer_id=u.user_id where up.developer_id= ?;",

  getProjectAgainstQa:" SELECT  up.project_id, u.name, (select distinct project_title from bugtracking.project p where p.project_id=up.project_id) as project_title FROM bugtracking.userproject up  inner join  bugtracking.users u on up.qa_id=u.user_id where up.qa_id= ? and qa_id is not null;"
}