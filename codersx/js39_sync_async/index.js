//sync vs async (synchronous vs asynchronous)
var fs = require('fs');

// console.log("Start");
// var song1 = fs.readFileSync('./song1.txt',{encoding: 'utf8'});
// console.log(song1);
// var song2 = fs.readFileSync('./song2.txt',{encoding: 'utf8'});
// console.log(song2);
// console.log("end");

//make coffee -> 5p
//Wear clothes
//danh rang rua mat

console.log("Start");
fs.readFile('./song1.txt',{encoding: 'utf8'}, function(error, data){
	console.log(data);
});
console.log("end");

