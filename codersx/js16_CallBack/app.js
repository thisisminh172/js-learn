//dùng function như tham số(callback)
// function sum(a,b){
//     return a+b;

// }
// console.log(sum(5,4));

var coffeeMachine = {
    makeCoffee: function(onFinish){
        console.log("Making coffee...");
        //không có retun nên trên console hiện undefined
        onFinish();
    }
}

var beep = function(){
    console.log("BEEP BEEP");
};
coffeeMachine.makeCoffee(beep);//naming convention
//khi truyền 1 hàm và 1 hàm khác gọi là callback