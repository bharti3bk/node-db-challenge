const Tasks = require("./taskModel.js");
const express = require("express")
const router = express.Router(); 

 router.get("/" , (req,res) => {
     Tasks.getAllTasks()
     .then(tasks => {
         tasks.forEach( task => (task.completed = boolean(task.completed)));
         return res.json(tasks);
     })
     .catch(err => {
         res.json(err);
     })
 })
 
 router.post("/", (req, res) => {
    const task = req.body;
    Tasks.AddTasks(task)
      .then(task => {
        task.completed = Boolean(task.completed);
        return res.status(200).json(task);
      })
      .catch(err => {
        return res.status(500).json({ message: "Failed to post task." });
      });
  });

module.exports = router;