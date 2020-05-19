//new keyword
// var today = new Date();
// console.log(today);
//Create a new object , object literal
var mouse = {
  weight: 0.2,
  getWeight: function(){
    return this.weight;
  }
};
// console.log(mouse.getWeight());
//constructor function
function Mouse(color,weight){
  this.type = "mouse";
  this.color = color;
  this.weight = weight;
}
Mouse.prototype.sleep = function(){
  console.log(this.color,"sleeping");
};

var mickey = new Mouse('orange',20);
console.log(mickey);
mickey.sleep();

var jerry = new Mouse('black',30);
jerry.sleep();
//best practice







