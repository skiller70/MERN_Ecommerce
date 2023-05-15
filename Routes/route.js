const express = require("express");
const router = express.Router();
const createProduct = require("../Controllers/createProduct")
const mongoModel = require("../Database/mongooseSchema");
const upload = require("../Middleware/multer")


router.route("/home").get((req, res) => {
  res.send("E commerce");
});

router.route("/createProduct").post(upload.upload.single("file"),createProduct)



module.exports = router;
