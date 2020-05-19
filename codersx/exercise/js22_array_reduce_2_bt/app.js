//array.reduce(part 2 bt)
var items = ["Tom","Minh","Trung"];
var nameList = items.reduce(function(currentList, item){
  return currentList+= "<"+item+">";
},"");
console.log(nameList);

//use map and join
var itemList = items.map(function(item){
  return "<"+item+">";
});
console.log(itemList.join(""));





