// npm install express --save

var express = require('express'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		ejs = require('ejs'),
		app = express();

app.use(bodyParser.urlencoded({ extended: true  }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', function(req, res) {

	res.render('41-web-ejs1');
});


app.listen(8000, function() {
	console.log('App listening on port 8000');
});
