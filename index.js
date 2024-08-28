//1 import json server
const jsonServer = require('json-server')

//2 create a server for media app using json-server
const MediaApp = jsonServer.create()

//3 create a middleware used by json-server
const middleware = jsonServer.defaults()

//4 set up routes for db.json
const route = jsonServer.router('db.json')

//5 set up port for running server
const PORT = 3000 || process.env.PORT

//6 use the defined middleware and port
MediaApp.use(middleware)
MediaApp.use(route)

//7 RUN the server

MediaApp.listen(PORT,()=>{
    console.log("MediaApp server running on port" + PORT);
    
    

})