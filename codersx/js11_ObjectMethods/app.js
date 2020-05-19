var myDog={
  name: 'dan',
  weight: 5,
  bark: function(){
    console.log("gau gau");
  },
  eat: function(bone){
  	this.weight = this.weight+ bone.weight;
  	return this;
  }
};
var bone  = {weight: 0.5};

console.log('before eating',myDog.weight);

myDog.eat(bone);
console.log('after eating',myDog.weight);