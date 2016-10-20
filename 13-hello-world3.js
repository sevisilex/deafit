
var hello = function() {
	console.log('Hello');
	setTimeout(world, 100);
};

var world = function() {
	console.log('      World');
	setTimeout(hello, 500);
};

var deaf = function() {
	console.log('            Deaf');
	setTimeout(it, 150);
};

var it = function() {
	console.log('                IT');
	setTimeout(smile, 200);
};

var smile = function() {
	console.log('                   :)');
	setTimeout(deaf, 50);
};

var line = function() {
	console.log('---------------------');
	setTimeout(line, 1000);
};

hello();
deaf();
line();
