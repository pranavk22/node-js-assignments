const path = require("path");
const fs = require("fs");
// const directoryPath = path.join(__dirname, "/");
fs.readdir(__dirname, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.forEach(function (file) {
    if (fs.lstatSync(file).isDirectory()) console.log("DIRECTORY:" + file);
    else console.log("FILE:" + file);
  });
});