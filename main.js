// load the http module
var http = require('http');

 // configure out HTTP server
 var server = http.createserver(function (request, response) {
    response.writehead(200, {"content-type": "text/plain"});
	response.end("Hello NodeApp!! \n");
 });
 
 // listen on localhost:8000
 server.listen(8000);
 console.log("server listening on port 8000: http://127.0.0.1:8000/);
 
 