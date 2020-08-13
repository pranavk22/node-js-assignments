var express = require("express");
var fs = require("fs");

var app = express();

var portNumber = process.argv[2];

var file = process.argv[3];

var string;

fs.readFile(file, "utf8", function (err, contents) {
  string = contents; 
});

app.get("/books", function (req, res) {
//   console.log(string);
  object = JSON.parse(string);
//   console.log(object);
  res.json(object);
});

app.listen(portNumber);
console.log("Listening to port " + portNumber);
