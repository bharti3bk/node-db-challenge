const express = require("express"); 
const router = require('../Routers/dataRouter.js')

const server = express();

server.use(express.json()); 
server.use('/api/projects' , router);  
server.get('/' , (req ,res) => {
    console.log("Hello from Express...")
})

module.exports = server;