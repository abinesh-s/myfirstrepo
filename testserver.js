var express = require('express');
var server = express.createServer();
server.get('/', function(req, res){
	console.log("My first application version controlled in github, developed in cloud9 and deployed using Heroku");
	res.send("Hello world from Cloud9, GIT and Heroku");
});
var port = process.env.PORT;
server.listen( port || 5000, function(){
    console.log("Listening on Port"+port);
});
