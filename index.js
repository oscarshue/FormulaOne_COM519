require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.set("view engine", "ejs");

// To access photos from the 'public' folder uncomment below line
//app.use(express.static(path.join(__dirname, "public")));

const driverController = require("./controllers/driver");

const { WEB_PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log("MongoDB connection error. Please make sure MongoDB is running.");
  process.exit();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`FormulaOne_COM519 listening at http://localhost:${port}`);
});

app.get("/drivers", driverController.list);