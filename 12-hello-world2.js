
var time = setInterval(function() {
	console.log('      World!');
}, 500);
console.log('Hello');

setTimeout(function() {
	clearInterval(time);
	console.log('Stopping :)');
}, 5000);
