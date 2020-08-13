var fs = require("fs");
var concat = require("concat-stream");

var file = "./readMe.txt";

var readStream = fs.createReadStream(file, "utf8");
var concatStream = concat(readStream);
readStream.on("error", handleError);
var array = readStream.pipe(concatStream);
function handleError(err) {
  // handle your error appropriately here, e.g.:
  console.error(err); // print the error to STDERR
  process.exit(1); // exit program with non-zero exit code
}
console.log(array);

// myReadStream.on("data", function (chunk) {
//     // console.log(chunk);

//     var array = concat(chunk);
//   console.log(array);
// });
// fs.readFile(file, "utf8", function (err, contentFile) {
//   if (err) throw err;
//   console.log("Returning the values of the file as a array:");
//   var aContentFile = contentFile.split(" ");
//   console.log(aContentFile);
// });
