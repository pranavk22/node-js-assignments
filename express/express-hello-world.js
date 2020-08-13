var express = require("express");

var app = express();

var port = process.env.PORT || 8080;

let date_ob = new Date();
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hour = date_ob.getHours();
let min = date_ob.getMinutes();
let sec = date_ob.getSeconds();
let msec = date_ob.getMilliseconds();

app.get("/", function (req, res) {
  res.send("Hello, world!");
});

app.get("/time", function (req, res) {
  res.send(
    year +
      "-" +
      month +
      "-" +
      date +
      "T" +
      hour +
      ":" +
      min +
      ":" +
      sec +
      "." +
      msec +
      "Z"
  );
});

app.listen(port);
console.log("Listening to port " + port);
