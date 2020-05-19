//array.reduce
//init
var numbers = [1,2,3,4,5];
var sum = numbers.reduce(function(a,b){
  console.log(a,b);
  return a+b;
},0);
console.log(sum);


var orders = [
  {name: 'A', quantity: 2, unitPrice: 100},
  {name: 'B', quantity: 1, unitPrice: 200},
  {name: 'C', quantity: 5, unitPrice: 500}
];

//total =?
var total = orders.reduce(function(currentTotal,product){
  console.log(currentTotal);
  return currentTotal+product.quantity*product.unitPrice;
},0);
//loop 1 : 0 + product1
console.log(total);




