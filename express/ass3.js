var express = require("express");

var app = express();

var portNumber = process.argv[2]

app.get("/home", function (req, res) {
  res.send("Hello, world!");
});

app.listen(portNumber);
console.log("Listening to port " +portNumber);
