//math object
//PI,ceil,floor,round,max,min,random
console.log(Math.PI);

var discArea = (r)=> {
  return r*r*Math.PI;
}
var s = discArea(5);
console.log(s);
function rollADice(){
  //return 1,2,3,4,5,6
  return Math.ceil(Math.random()*6);
}
console.log(rollADice());





