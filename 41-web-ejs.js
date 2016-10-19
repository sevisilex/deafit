// npm install express --save

var express = require('express'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		ejs = require('ejs'),
		app = express();

app.use(bodyParser.urlencoded({ extended: true  }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', '.');

var items = ['Berlin', 'Paris', 'Warsaw', 'Wien', 'London', 'Praga'];

app.get('/', function(req, res) {
	if (typeof req.query.capital === 'string') {
		items.push(req.query.capital);
	}
	res.render('41-web-ejs1', { items: items});
});


app.listen(8000, function() {
	console.log('App listening on port 8000');
});
