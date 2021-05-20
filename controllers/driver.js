const Driver = require("../models/Driver");

exports.list = async (req, res) => {
  try {
    console.log(req.query)
    const message = req.query.message;
    const drivers = await Driver.find({});
    res.render("drivers", { drivers: drivers, message: message });
  } catch (e) {
    res.status(404).send({ message: "could not list drivers" });
  }
};