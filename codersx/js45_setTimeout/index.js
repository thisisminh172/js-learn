//setTimeout(fn,ms);//ms ~ miliseconds
//setTimeout(fn,ms);
//timer
function done(){
	console.log('finished');
}
console.log('start');
var timeoutId = setTimeout(done,1000);
console.log('Done');
clearTimeout(timeoutId);
