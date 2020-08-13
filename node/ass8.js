var fs = require("fs");
var file = './numbers.txt'

fs.readFile(file, "utf8", function (err, contents) {
  if (err) throw err;
  var numbers = contents.split(" ").map(function (num) {
    return parseInt(num);
  });
  var total = numbers.reduce(function (prev, current) {
    return prev + current;
  });
  console.log(total);
});
