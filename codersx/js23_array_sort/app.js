//map reduce filter 
//array.sort
//syntax array.sort(function(a,b){});
//demo
var numbers = [2,9,3,4,1];
//xếp theo thứ tự tăng dần - ascending
var ascendingNumbers = numbers.sort(function(a,b){
  //assume a = 1, b=9
  return a -b;
});
console.log(ascendingNumbers);

//giảm - descending
var descendingNumbers = numbers.sort(function(a,b){
  //assume a=3,b=4
  //a come after b
  return b-a;
});
console.log(descendingNumbers);

var employees = [
  {name: "Ti",age: 18},
  {name: "Teo",age: 30},
  {name: "Maria",age: 28}
];
var sortedByAge = employees.sort(function(a,b){
  //assume a tèo, b maria
  //expect: a come after b

  return b.age - a.age;//>0
});
console.log(sortedByAge);






