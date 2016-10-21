// npm install express --save

var express = require('express'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		fs = require('fs'),
		mysql = require('mysql'),
		app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', '.');

var pool  = mysql.createPool({
	connectionLimit : 10,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'deafit',
	charset: 'utf8'
});

pool.getConnection(function(err, connection) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		throw err;
	}
	console.log('connected as id ' + connection.threadId);
});


app.get('/', function(req, res) {
	pool.query('SELECT * FROM users', function(err, rows, fields) {
		if (err) throw err;
		res.render('53-web-mysql1', { items: rows, get: req.query, post: req.body });
	});
});

app.delete('/', function(req, res) {
	if (typeof req.body.id === 'undefined') throw 'no params id';
	pool.query('DELETE FROM users WHERE id = ?', [req.body.id], function(err) {
		if (err) throw err;
		res.redirect('/');
	});
});

app.post('/', function(req, res) {
	pool.query('INSERT INTO users (firstname, lastname, description) VALUES (?)', [[req.body.firstname, req.body.lastname, req.body.description]], function(err) {
		if (err) throw err;
		res.redirect('/');
	});
});

app.put('/', function(req, res) {
	if (typeof req.body.id === 'undefined') throw 'no params id';
	pool.query('UPDATE users SET ? WHERE id = ?', [{firstname: req.body.firstname, lastname: req.body.lastname, description: req.body.description}, req.body.id], function(err) {
		if (err) throw err;
		res.redirect('/');
	});
});


app.listen(8000, function() {
	console.log('App listening on port 8000');
});
