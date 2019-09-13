const Tasks = require("./taskModel.js");
const express = require("express")
const router = express.Router(); 

 router.get("/" , (req,res) => {
     Tasks.getAllTasks()
     .then(tasks => {
         
     })
 })


module.exports = router;