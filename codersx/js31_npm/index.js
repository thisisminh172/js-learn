//npm - node package manager
//npm init
//npm install readline-sync --save
var readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

// var languages = [];
// var language = readlineSync.question('What is your mother language?');
// languages.push(language);
// console.log(languages);


var pet = {};
var name = readlineSync.question("what is your pet name? ");
var gender = readlineSync.question("Pet gender (Male/Female)? ");
var weight = readlineSync.question("Weight? ");
pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);
console.log(pet);



