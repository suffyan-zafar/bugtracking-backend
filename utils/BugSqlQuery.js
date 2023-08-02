module.exports={
displayBug: "select (select u.name from bugtracking.users u where u.user_id=b.bug_creater_id) as creater_name, (select p.project_title from bugtracking.project p where p.project_id=b.projects_id) as project_name, b.title,b.description,b.deadline, b.type,b.status, (select u.name from bugtracking.users u where u.user_id=b.developers_id) as developer_name, b.bug_id,  b.image,(select p2.project_id from bugtracking.project p2 where p2.project_id=b.projects_id) as project_id from bugtracking.bug b where b.bug_creater_id=? and b.projects_id=?",

insertBug: "INSERT INTO bugtracking.bug(title,description,deadline,type,status,image,bug_creater_id,developers_id,projects_id) VALUES(?)",

getQaAgainstProject:"select project_id, project_title from  bugtracking.project where project_id in (SELECT project_id FROM bugtracking.userproject where qa_id= ?)",


getDeveloperAgainstProject: "SELECT user_id,name FROM bugtracking.users where user_id in (select developer_id from bugtracking.userproject where project_id= ?)",


displayProjectWithBug: "SELECT (select p.project_title from bugtracking.project p where p.project_id=b.projects_id) as project_name, b.title,b.description,b.deadline, b.type,b.status, (select u.name from bugtracking.users u where u.user_id=b.bug_creater_id) as creater_name, b.bug_id, b.image, (select u2.name from bugtracking.users u2 where u2.user_id=b.developers_id) as developer FROM bugtracking.bug b where b.projects_id= ?",

updateBugStatus:"UPDATE bugtracking.bug SET status = ? WHERE bug_id= ? and  type= ? ",

deleteBug:"DELETE FROM bugtracking.bug WHERE bug_id= ? ",

assignProjectDeveloper:"UPDATE bugtracking.bug SET developers_id =? WHERE bug_id = ? and title= ?  and projects_id=?",

checkBug:"SELECT b.title as project_name,b.description,b.deadline,b.type,b.status, b.bug_id FROM bugtracking.bug b where b.bug_id=? and b.developers_id=?",






}