var data = [
  { item: "watch", price: "3000" },
  { item: "smartphone", price: "20000" },
  { item: "laptop", price: "50000" },
];

var requiredItem = [];

const bodyparser = require("body-parser");
// var urlencodedParser = bodyparser.urlencoded({ extended: false });

module.exports = function (app) {
  app.use(bodyparser.json())

  app.get("/items", function (req, res) {
    res.send(data);
    // res.render("items", { items: data });
  });

  app.post("/items", function (req, res) {
    console.log(req.body);
    data.push(req.body);
    console.log(data);
    res.send(data);
    // res.render("items", { items: data });
  });

  app.get("/items/:id", function (req, res) {
    requiredItem.push(data[req.params.id]);
    console.log(requiredItem);
    res.send(requiredItem);
    // res.render("items", { items: requiredItem });
    requiredItem.pop();
  });

  app.patch("/items/:id", function (req, res) {
    console.log(req.body);
    data[req.params.id] = req.body;
    res.send(data);
  });

  app.delete("/items/:id", function (req, res) {
    console.log(req.params.id, data);
    data.splice([req.params.id], 1);
    console.log(data);
    res.send(data);
  });
};
// 1. GET /items - this should render a list of shopping items.
// 2. POST /items - this route should accept form data and add it to the shopping
// list.
// 3. GET /items/:id - this route should display a single item's name and price
// 4. PATCH /items/:id, this route should modify a single item's name and/or price
// 5. DELETE /items/:id - this route should allow you to delete a specific item from
// the array.
