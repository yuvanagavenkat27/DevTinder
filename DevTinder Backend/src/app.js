const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello From Server");
});

app.use("/", (req, res) => {
  res.send("Hello From Dashboard Namste JS");
});

app.use("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server Started Successfully");
});
