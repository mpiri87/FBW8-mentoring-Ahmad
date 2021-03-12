const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//make anything inside folder accessable without creating rout
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// setup the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
