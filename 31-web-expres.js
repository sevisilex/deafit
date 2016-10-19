// npm install express --save

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/home', function(req, res) {
	res.send('Home!');
});

app.get('/user/:user', function(req, res) {
	res.send('Hi ' + req.params.user + '!!!');
});

app.listen(8000, function() {
	console.log('App listening on port 8000');
});
