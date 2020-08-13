var fs = require("fs");
var file = "readMe.txt";
var wordSearch = process.argv[2];

fs.readFile(file, "utf8", function (err, contents) {
  if (err) throw err;
  var wordsArray = contents.split(' ');
  var requiredWord = wordsArray.filter(function (word) {
    return word.includes(wordSearch);
  });
  console.log(requiredWord.length);
});
