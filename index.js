const express = require("express");
const app = express();
const chalk = require("chalk");

app.get("/", function (req, res) {
  res.json([
    {
      name: "shawon",
    },
    {
      name: "sujan",
    },
    {
      name: "muntasir",
    },
    {
      name: "mahmudul",
    },
  ]);
});

app.get("/test", function () {
  res.json([
    {
      msg: "successful try",
    },
  ]);
});

app.listen(8000, function () {
  console.log(chalk.bgBlue("Port running on 8000 port"));
});
