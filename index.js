const express = require("express");
const bodyParser = require("body-parser");
const datas = require("./datas.json");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", {datas});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
