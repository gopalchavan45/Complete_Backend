const express = require("express");

const app = express(); //here we created server but run yet

app.get("/", (req, res) => {
  res.send("hellow world");
});

app.get("/about", (req, res) => {
  res.send("about page");
});
app.listen(3000); //way of start server
