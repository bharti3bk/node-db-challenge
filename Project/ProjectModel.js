const express = require('express')
const db = require('../data/db_config'); 
module.exports = {
    getAllProjects , 
    AddProjects,
    getById, 
    AddResource, 
    getAllTasks,
    AddTasks,
    findTaskById ,
    findResourceById
}  
function getAllProjects(){
    return db('projects') 
    .then(projects => {
        return projects;
    })  
}   

function getAllTasks(){
    return db('tasks')
    .then(tasks => {
        return tasks;
    })
}

function getById(id)
{
    return db("projects")
    .where({id : id})
    .then(project => {
       if(project){
           return project[0];
       }
       else{
          return null;
       }
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

function AddProjects(project) {
    return db('project') 
    .insert(project)
    .then(id => {
        return getById(id[0]);
    })
}   

function AddTasks(task){
    return db('task')
    .insert(task) 
    .then(id => {
        return findTaskById(id[0]);
    })
}