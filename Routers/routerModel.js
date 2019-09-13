const express = require('express')
const db = require('../data/db_config'); 
module.exports = {
    getAllProjects , 
    AddProjects,
    getById, 
    AddResource, 
    getAlResources , 
    getAllTasks
}  

function getAllProjects(){
    return db('projects') 
    .then(projects => {
        return projects;
    })  
}   

function getAlResources(){
    return db('resources') 
    .then(resources => {
        return resources;
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

function AddProjects(project) {
    return db('project') 
    .insert(project)
    .then(id => {
        return getById(id[0]);
    })
} 

function AddResource(resource) {
    return db('resources') 
    .insert(resource)
    .then(id => {
        return getById(id[0]);
    })
}