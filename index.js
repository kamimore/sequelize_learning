const express = require("express");
var bodyParser = require("body-parser");

require('./models/index')
var userCtrl = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());


app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/add", userCtrl.addUser);

app.listen(3000, () => {
  console.log("App will run on: http://localhost:3000");
});
