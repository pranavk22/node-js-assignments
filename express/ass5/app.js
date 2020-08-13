var express = require("express");

var app = express();

app.set('view engine', 'ejs');

const bodyparser = require("body-parser");
var urlencodedParser = bodyparser.urlencoded({ extended: false });

app.get("/form", function (req, res) {
  res.render("form");
});

app.post("/path", urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send(req.body.str.split('').reverse().join(''));
});
app.listen(3000);
console.log("Listening to port 3000");
