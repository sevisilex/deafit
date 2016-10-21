var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit : 10,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'deafit'
});

pool.query('SELECT * FROM users;', function(err, rows) {
	if (err) throw err;
	for (var i = 0; i < rows.length; i++) {
		var row = rows[i];
		console.log(row.id, row.firstname, row.lastname);
	}
	pool.end();
});

