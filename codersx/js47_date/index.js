//Date
//moment.js
var moment = require('moment');


// var now = new Date();
// var myBirthday = new Date(1993,1,17);
// console.log(now.getTime());
// console.log(myBirthday.getTime());

//number of miliseconds from 1-1-1970
var now = moment('2020-04-12 07:00');
console.log(now.fromNow());