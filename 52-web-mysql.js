// npm install express --save

var express = require('express'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		fs = require('fs'),
		mysql = require('mysql'),
		app = express();

app.use(bodyParser.urlencoded({ extended: true  }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', '.');

//var connection = mysql.createConnection({
//	host: 'localhost',
//	user: 'root',
//	password: '',
//	database: 'deafit'
//});
//
//connection.connect(function(err) {
//  if (err) {
//    console.error('error connecting: ' + err.stack);
//    return;
//  }
//  console.log('connected as id ' + connection.threadId);
//});

var pool  = mysql.createPool({
	connectionLimit : 10,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'deafit',
		insecureAuth: true,
		charset: 'utf8',
		multipleStatements: true
});

pool.getConnection(function(err, connection) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		throw err;
	}
	console.log('connected as id ' + connection.threadId);
});

app.get('/', function(req, res) {
	pool.query('SELECT * FROM users;', function(err, rows, fields) {
		if (err) throw err;
		res.render('52-web-mysql1', { items: rows});
	});
});

app.listen(8000, function() {
	console.log('App listening on port 8000');
});
