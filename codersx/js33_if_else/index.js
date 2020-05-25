//if else
//syntax
//if(condition){
// }else{
// }
/*
function tossCoin(){
	var value = Math.random();
	if(value < 0.5){
		console.log('mat sap');
	}else{
		console.log('mat ngua');
	}
}

//tossCoin();

function shouldIDateHer(){
	var value = Math.random();
	if(value < 0.5){
		console.log('Yes');
	}else{
		console.log('No');
	}
}
shouldIDateHer();
*/
function countBills(bills){
	var total = 0;
	for(var bill of bills){
		if(!bill.fake){
			total += bill.value;
		}else{
			console.log('fake bill', bill);
			break;
		}
	}
	return total;
}

var bills = [
	{value: 10000},
	{value: 20000},
	{value: 50000},
	{value: 100000, fake: true},
	{value: 500000}
];

var total = countBills(bills);
console.log(total);