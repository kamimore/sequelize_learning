const express = require("express");
var bodyParser = require("body-parser");
const User = require('./models/User')

const app = express();

app.use(bodyParser.json());

User.sync({ force: true });

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("App will run on: http://localhost:3000");
});
