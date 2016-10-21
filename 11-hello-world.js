
// echo('Hello');
// sleep(2000);      // <- blocking
// echo('World');



setTimeout(function() {
	console.log('World');
}, 2000);
// non-blocking
console.log('Hello');

