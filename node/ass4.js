var fs = require('fs');

var data = process.argv[2];
fs.writeFile('writeMe.txt', data,function (err, files){
    console.log("The file was saved!");
});