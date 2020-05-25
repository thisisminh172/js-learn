// console.log("hello");
// var readlineSync = require('readline-sync');
// var name = readlineSync.question("what is your name? ");
// console.log("hello "+name+" good morning");

//JSON object
//1. stringify - convert an object to a json string
//2. parse - conver an json string to an object

var myDog= {
	name: 'milu',
	age: 1,
	dead: false
};
var myDogString = JSON.stringify(myDog);
var myCatString = '{"name":"Tom","age":2,"dead":true}';
var myCat = JSON.parse(myCatString);
console.log(typeof(myCat));
console.log(myCat.name);
console.log(myCat);

//exercise
//1. show all students
//2. create a new student
//3. save and exit
//save to ./data.json ->fs.readFileSync, JSON.parse
var fs = require('fs');
var readlineSync = require('readline-sync');

var Students=[
{name: "Le Minh",age: 28,gender: "male"},
{name: "Le Trung",age: 24,gender: "male"},
{name: "Hoa minzy",age: 27,gender: "female"}
];


var newStudent = {};
var name = readlineSync.question("what is your name? ");
var age = readlineSync.question("How old are you? ");
var gender = readlineSync.question("What is your gender? ");
newStudent.name = name;
newStudent.age = parseInt(age);
newStudent.gender = gender;
Students.push(newStudent);
console.log(Students);
var studentListString = JSON.stringify(Students);
fs.writeFileSync('./data.json',studentListString);



