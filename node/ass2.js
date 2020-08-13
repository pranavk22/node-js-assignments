var fs = require("fs");
var file=process.argv[2];
// console.log(file);
fs.readFile(file, "utf8", function (err, contents) {
  console.log(contents);
});

// console.log('after calling readFile');
