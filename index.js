const server = require("./API/server.js");
const port = 2000;
server.listen(port, () => {
  console.log(`Server Listening On Port: ${port}`);
}) 
server.get('/' , (req ,res) => {
    console.log("Hello from Express...")
});