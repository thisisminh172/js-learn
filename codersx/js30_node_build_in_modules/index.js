//cac module dc build sẵn khi cài node
//1. đọc file
//fs.readFileSync(path[, options])
var fs = require('fs');

var text = fs.readFileSync('./song.txt',{encoding: 'utf8'});
console.log(text);

//2. ghi file
fs.writeFileSync('./song-2.txt','i am minh');

