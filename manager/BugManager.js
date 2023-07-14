class BugManager{
  static insertBug(){
    const sql_query=`INSERT INTO bugtracking.bug
    (title,description,deadline,type,status,image,bug_creater_id,developer_id,project_id) VALUES
    ();
    `;
    console.log("bug manager ");
  }
}

module.exports=BugManager;