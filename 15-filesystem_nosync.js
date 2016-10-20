
var fs = require('fs');


// ------- no Sync, no blocks
console.log('NoSync - START');
fs.readdir('.', function(err, files) {
	if (err) {
		console.log('error', err);
	} else {
		for (var i = 0; i < files.length; i++) {
			console.log(i + 1, files[i]);
		}
	}
});
console.log('NoSync - END');