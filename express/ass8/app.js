var express = require("express");
const path = require("path");

var app = express();

app.set("view engine", "pug");

// app.set("views", path.join(__dirname, "views"));

app.get("/home", function (req, res) {
  res.render("index", { date: new Date().toDateString() });
});

app.listen(3000);
console.log("Listening to port 3000");
