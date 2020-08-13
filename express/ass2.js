var express = require("express");

var app = express();

let date_ob = new Date();
let year = date_ob.getFullYear();

app.get("/year", function (req, res) {
  var age = req.query.age;
  console.log(age);
  bornYear = year - age;
  res.send("You were born in " + bornYear);
});

app.listen(3000);
console.log("Listening to port 3000");
