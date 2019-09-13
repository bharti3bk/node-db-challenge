const db = require("../data/db_config.js");
module.exports = {
 getAllTasks,
 AddTasks,
 findTaskById
}  

function AddTasks(task){
    return db('task')
    .insert(task) 
    .then(id => {
        return findTaskById(id[0]);
    })
}  

function findTaskById(id) {
    return db("tasks")
      .where({ id: id })
      .then(task => {
        if (task) {
          return task[0];
        } else {
          return null;
        }
      });
  }  

  function getAllTasks(){
    return db('tasks')
    .join("projects" , "tasks.project_id" , "projects.id") 
    .select("tasks.*" ,"projects.name"  , "projects.description");
}