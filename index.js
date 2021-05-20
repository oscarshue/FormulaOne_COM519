const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.set("view engine", "ejs");

// To access photos from the 'public' folder uncomment below line
//app.use(express.static(path.join(__dirname, "public")));

const { WEB_PORT } = process.env;

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/drivers", (req, res) => {
  res.render("drivers");
});

app.listen(port, () => {
  console.log(`FormulaOne_COM519 listening at http://localhost:${port}`);
  chalk.green("✓")
});