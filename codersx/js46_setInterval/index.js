//setInterval(fn,ms);
var i = 0;
var intervalId = setInterval(function(){
	++i;
	console.log(i);
	if(i===5){
		clearInterval(intervalId);
	}
},1000);


//write a function count 1->10
//return a promise
//function countFrom(a,b)
//countFrom(1,10).then(function)
