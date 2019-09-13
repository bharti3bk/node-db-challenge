const express = require("express"); 
const router = require('../Routers/dataRouter.js')

const server = express();

server.use(express.json()); 
server.use('/api/projects' , router); 
module.exports = server;