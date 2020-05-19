//array.filter
//filter function
//thỏa điều kiện sẽ cho qua
var numbers = [1, 2, 3, 4, 5, 6, 8];
var evenNumbers = numbers.filter(function (item) {
  return item % 3 === 0;
});
console.log(evenNumbers);
console.log(4%2===0);

console.log(numbers);