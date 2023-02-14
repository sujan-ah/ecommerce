const express = require("express");
const app = express();
const chalk = require("chalk");

app.get("/", function (req, res) {
  res.send("Hello World asd");
});

app.listen(8000, function () {
  console.log(chalk.bgBlue("Port running on 8000 port"));
});
