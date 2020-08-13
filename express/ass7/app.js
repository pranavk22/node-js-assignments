var express = require("express");
var appController = require("./controller/appController");

var app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));

appController(app);

app.listen(3000);
console.log("Listening to port 3000");
