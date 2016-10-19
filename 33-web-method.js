// npm install express --save

var express = require('express'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		fs = require('fs'),
		app = express();

app.use(bodyParser.urlencoded({ extended: true  }));
app.use(methodOverride('_method'));

var go = function(req, res) {	
	fs.readFile('33-web-method1.html', 'utf8', function(err, output) {
		res.type('html').send(
			output
				.replace('{{name}}', req.body.name)
				.replace('{{what}}', req.body.what)
		);
	});	
};

app.get('/', go);

app.post('/', go);

app.put('/', go);

app.delete('/', go);

app.listen(8000, function() {
	console.log('App listening on port 8000');
});
