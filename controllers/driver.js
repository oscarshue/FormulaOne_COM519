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

exports.create = async (req, res) => {   
  let driver = new Driver({ name: req.body.driver_name, number: req.body.driver_number, team: req.body.driver_team }); 
  try {
    await driver.save();
    res.redirect('/drivers/?message=driver has been created')
  } catch (e) {
      return res.status(400).send({
        message: JSON.parse(e),
    });  
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    await Driver.findByIdAndRemove(id);
    res.redirect("/drivers");
  } catch (e) {
    res.status(404).send({
      message: `could not delete  record ${id}.`,
    });
  }
};