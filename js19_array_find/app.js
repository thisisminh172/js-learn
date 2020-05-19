//array.find
//find function
//thỏa điều kiện sẽ cho qua
//trả về giá trị đầu ti
var numbers = [1, 2, 3, 4, 5, 6, 8];
var evenNumbers = numbers.find(function (item) {
  return item % 3 === 0;
});
console.log(evenNumbers);


console.log(numbers);