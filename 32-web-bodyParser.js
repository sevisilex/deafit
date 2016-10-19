// npm install express --save

var express = require('express'),
		bodyParser = require('body-parser'),
		fs = require('fs'),
		app = express();

app.use(bodyParser.urlencoded({ extended: true  }));

app.get('/', function(req, res) {
	fs.readFile('32-web-bodyParser1.html', 'utf8', function(err, output) {
		res.type('html').send(output);
	});
});

app.post('/', function(req, res) {
	fs.readFile('32-web-bodyParser2.html', 'utf8', function(err, output) {
		output = output
				.replace('{{name}}', req.body.name)
				.replace('{{city}}', req.body.city)
				.replace('{{nummer}}', req.body.nummer);
		res.type('html').send(output);
	});
});

app.listen(8000, function() {
	console.log('App listening on port 8000');
});
