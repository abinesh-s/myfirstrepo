var express = require('express');
var server = express.createServer();
server.get('/', function(req, res){
	console.log("My first application version controlled in github, developed in cloud9 and deployed using Heroku");
	res.send("Hello world from Cloud9, GIT and Heroku");
});
server.listen(8966, '10.1.10.55');
