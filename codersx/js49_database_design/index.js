//database design
var classes = [
	{name: '1A',
	 teacher: {
	 	name: 'Quynh',
	 	age: 30
	 },
	 students: [
	 	{name: 'Minh', height: 120},
	 	{name: 'Nga', height: 100},
	 	{name: 'Tien', height: 122}
	 ]
	},
	{name: '2A',
	 teacher: {
	 	name: 'Chinh',
	 	age: 55
	 }},
	{name: '3A',
	 teacher: {
	 	name: 'Nguyet',
	 	age: 35
	 }},
	{name: '4A',
	 teacher: {
	 	name: 'Huong',
	 	age: 45
	 }},
	{name: '5A',
	 teacher: {
	 	name: 'Hai',
	 	age: 50
	 }},
	
];

var class1A = classes.find(function(x){
	return x.name ==='1A';
});
console.log(class1A.students.length);