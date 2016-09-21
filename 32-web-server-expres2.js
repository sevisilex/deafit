// npm install express --save

var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.methodOverride());


app.get('/', function (req, res) {
  fs.readFile('32-web-server-expres21.html', 'utf8', function(err, output) {
//	  res.set('Content-Type', 'text/html').send(output);
	  res.type('html').send(output);
  });
});

app.post('/', function (req, res) {
console.log(req.params, req.body);
  fs.readFile('32-web-server-expres22.html', 'utf8', function(err, output) {
	  output = output
		.replace('{{name}}', req.body.name)
		.replace('{{city}}', req.body.city)
		.replace('{{nummer}}', req.body.nummer);
//	  res.set('Content-Type', 'text/html').send(output);
	  res.type('html').send(output);
  });
});

app.put('/', function (req, res) {
	res.type('html').send('put');
});


app.listen(8000, function () {
  console.log('App listening on port 8000');
});
