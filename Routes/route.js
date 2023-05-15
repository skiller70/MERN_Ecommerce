const express = require("express");
const router = express.Router();


router.route("/home").get((req,res)=>{ res.send("E commerce")})


module.exports = router;
