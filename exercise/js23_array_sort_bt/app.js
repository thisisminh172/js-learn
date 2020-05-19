//map reduce filter 
//array.sort
//sort by price from more expensive to less expensive
//sort by stockValue from the amount of money
var listProducts = [
  {name: 'A',price: 1000,stock: 22220},
  {name: 'B',price: 200,stock: 10030},
  {name: 'C',price: 4000,stock: 50},
  {name: 'D',price: 6000,stock: 99150},
  {name: 'E',price: 10,stock: 2000}
];

var sortedByHighPrice = listProducts.sort(function(a,b){
  //console.log(a.price,b.price,a.price-b.price,"test");

  return b.price-a.price;
});
console.log(sortedByHighPrice);

var sortedByStockValue = listProducts.sort(function(a,b){
  return b.price*b.stock - a.price*a.stock;
});
console.log(sortedByStockValue);

console.log(listProducts);




