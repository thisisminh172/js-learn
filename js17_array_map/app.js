//khi truyền 1 hàm và 1 hàm khác gọi là callback
//array method
var numbers = [1,2,3,4];
var squareNumbers = numbers.map(function(item){
    return item*item;
});
//console.log(squareNumbers);
var rectangles = [
    {width: 10,height: 5},
    {width: 10,height: 20},
    {width: 4,height: 5}
];
//dùng array map method doi rectangle thanh 1 array moi gom có dien tich

var areaRectangles = rectangles.map(function(rect){
    let area = rect.width * rect.height;
    return area;
})
console.log(areaRectangles);
console.log(rectangles);





