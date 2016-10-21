var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');
	
var app = express();

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', '.');

app.get('/', function(req, res) {
	res.render('44-web-crud1');
});

app.post('/', function(req, res) {
	res.send('HTTP POST - create a new record');
});

app.put('/', function(req, res) {
	res.send('HTTP PUT - update a record');
});

app.delete('/', function(req, res) {
	res.send('HTTP DELETE - delete a record');
});

app.listen(8000, function() {
	console.log('App listening on port 8000');
});
