// for(let i = 0; i<10;i++){
//     console.log(i+1,": ", i);
// }

var employees =[
    {name: 'thinh',age: 28},
    {name: 'hoang',age: 30},
    {name: 'tuan',age: 14}
];

// for (let i = 0; i< employees.length;i++){
//     console.log(employees[i].name);
// }
var content = '';

for(let employee of employees){
    console.log(employee.name,employee.age);
    content += '<li>'+employee.name+'</li>';
}
document.getElementById('contact-list').innerHTML = content;

var myDog={
    name: 'dan',
    age: 1,
    weight: 5
};
for(var key in myDog){
    console.log(typeof(key),key, myDog[key]);
}