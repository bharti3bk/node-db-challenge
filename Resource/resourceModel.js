const db = require("../data/db_config.js") 

module.exports = {
 getAlResources,
 findResourceById,
 AddResource
} 

function getAlResources(){
    return db('resources') 
    .then(resources => {
        return resources;
    })
} 

function findResourceById(id) {
    return db("resources")
      .where({ id: id })
      .then(resource => {
        if (resource) {
          return resource[0];
        } else {
          return null;
        }
      });
  }

  function AddResource(resource) {
    return db('resource') 
    .insert(resource)
    .then(id => {
        return findResourceById(id[0]);
    }) 
} 
