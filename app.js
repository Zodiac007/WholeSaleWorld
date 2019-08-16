var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("Home");
});

app.get("/aboutus", function(req, res) {
  res.render("aboutUs");
});

app.get("/contact", function(req, res) {
  res.render("contactUs");
});

app.get("/cartvalue", function(req, res) {
  res.render("cart");
});

app.get("/checkOut", function(req, res) {
  res.render("checkout");
});

app.get("/singapore", function(req, res) {
  res.render("Singapore");
});

var port = process.env.PORT || 5000;
app.listen(port, process.env.IP, function() {
  console.log("server started");
});
