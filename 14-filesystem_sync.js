
var fs = require('fs');


// ------- SYNC
console.log('Sync - START');
try {
	var files = fs.readdirSync('.');
	for (var i = 0; i < files.length; i++) {
		console.log(i + 1, files[i]);
	}
} catch (err) {
	console.log('error', err);
}
console.log('Sync - END');


