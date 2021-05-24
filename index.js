require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.set("view engine", "ejs");
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  


// To access photos from the 'public' folder uncomment below line
//app.use(express.static(path.join(__dirname, "public")));

const driverController = require("./controllers/driver");

const { WEB_PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
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

app.get("/create_driver", (req, res) => {
  res.render("create_driver");
});

app.post("/create-driver", driverController.create);

app.get("/driver/delete/:id", driverController.delete);

app.get("/driver/update/:id", driverController.edit);
app.post("/driver/update/:id", driverController.update);