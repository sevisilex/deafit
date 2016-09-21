
var http = require('http');
var app = http.createServer(function(req, res) {
    var date = new Date();
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<html><body>' +
	    '<h2>Hello World!</h2>' +
	    '<h1>'+ date +'</h1>' +
	    '</body></html>');
});
app.listen(8000);
