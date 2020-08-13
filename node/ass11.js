var fs = require("fs");
var file='./readMe.txt';
// console.log(file);
fs.readFile(file, "utf8", function (err, contents) {
  console.log(contents);
});
