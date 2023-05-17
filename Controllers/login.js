const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  console.log("ssss")
  const token = jwt.sign(req.auth, process.env.JWT_TOKEN);

  res.status(201).send(token);
};  