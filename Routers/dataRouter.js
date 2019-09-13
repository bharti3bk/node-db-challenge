const express = require('express')
const router = express.Router();  
const db = require('./routerModel.js') 


router.get('/' ,(req , res) => {
    db.getAllProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.json(err)
    })
})  
 
router.post('/' , (req , res) => { 
    const projectData = req.body; 

    db.AddProjects(projectData)
    .then(project => {
        res.json(project)
    })
    .catch(err => {
        res.json(err)
    })
}) 

router.get('/:id' , (req , res) => {
    const {id} = req.params;

    db.getById(id)
    .then(project => {
        if(project) {
            res.json(project);
        }
        else {
            res.json({message : "could not find"})
        }
    }) 
    .catch(err => {
        res.json(err);
    })
})