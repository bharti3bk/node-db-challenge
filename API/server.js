const express = require("express"); 
const router = require('../Routers/dataRouter.js')

const server = express();

server.use(express.json()); 
server.use('/api/projects' , router); 
server.use('/api/resources' , router);
server.use('/api/tasks' , router);
module.exports = server;