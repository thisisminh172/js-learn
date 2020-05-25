var fs = require('fs');
var readlineSync = require('readline-sync');

var studentListStringTemp= fs.readFileSync('./data.json',{encoding: 'utf8'});

var Students = JSON.parse(studentListStringTemp);
while(true){
	console.log("===MENU===");
	console.log("1. Show all students");
	console.log("2. Create a new student");
	console.log("3. Save & exit");
	var option = readlineSync.question("Please choose your option: ");
	if(option === '1'){
		console.log(Students);
	}
	else if(option === '2'){
		var newStudent={};
		var name = readlineSync.question("Enter student name: ");
		var age = readlineSync.question("Enter student age: ");
		var classNum = readlineSync.question("Enter class number");
		newStudent.name = name;
		newStudent.age = parseInt(age);
		newStudent.classNum = classNum;
		Students.push(newStudent);
	}else if(option ==='3'){
		var studentListString = JSON.stringify(Students);
		fs.writeFileSync('./data.json',studentListString);
		break;
	}
}