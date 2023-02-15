const express = require("express");
const chalk = require("chalk");
const userRoute = require("./routes/userRoute");
const app = express();

app.use("/", userRoute);

app.listen(8000, function () {
  console.log(chalk.bgBlue("Port running on 8000 port"));
});
