//array.reduce
// var numbers = [1,2,3,4,5];
// var num = numbers.reduce(function(a,b){
//   console.log(a,b);
//   return a+b;
// });
// console.log(num);

//bai tap
//gio hang
var orders = [
  {name: 'A', quantity: 2, unitPrice: 100},
  {name: 'B', quantity: 1, unitPrice: 200},
  {name: 'C', quantity: 5, unitPrice: 500}
];
//dùng map de doi thành chuỗi giá
var priceList = orders.map(function(item){
  return item.quantity*item.unitPrice;
});

//dùng reduce tính tổng đơn hàng
var sum  = priceList.reduce(function(item1, item2){
  return item1+item2;
});

console.log(sum);





