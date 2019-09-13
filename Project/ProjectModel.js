const express = require('express')
const db = require('../data/db_config'); 
module.exports = {
    getAllProjects , 
    AddProjects,
    getById
}  
function getAllProjects(){
    return db('projects') 
    .then(projects => {
        return projects;
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

