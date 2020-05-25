//requirements
//A student management app
//show current student list
// add new student


// 1. Show all student
// 2. Create a new student
// 3. Save & Exit

var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];


function loadData(){
	var fileContent = fs.readFileSync('./data.json',{encoding: 'utf8'});
	students = JSON.parse(fileContent);
}


function showMenu(){
	console.log('1. show all menu');
	console.log('2. Create a new student');
	console.log('3. Save & Exit');

	var option = readlineSync.question('> ');
	
	switch(option){
		case "1":
		showStudents();
		showMenu();
		break;
		case "2":
		showCreateStudent();
		showMenu();
		break;
		case "3":
		saveAndExit();
		break;
		default:
		console.log('Invalid number');
		showMenu();
		break;
}
}


function showStudents(){
	for (var student of students){
		console.log(student.name, student.age);
	}
}


function showCreateStudent(){
	var name = readlineSync.question('>Name: ');
	var age = readlineSync.question('>Age: ');
	var student = {
		name: name,
		age: parseInt(age)
	};
	students.push(student);

}


function saveAndExit(){
	var content = JSON.stringify(students);
	fs.writeFileSync('./data.json',content,{encoding: 'utf8'});
}



function main(){
	loadData();
	
	showMenu();

	
}

main();
