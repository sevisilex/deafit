
var http = require('http');
var app = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('hello world\n');
});
app.listen(8000);