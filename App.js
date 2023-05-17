const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const router = require("./Routes/route")
require("./Database/mongooseConnect")

app.use("/",router)




app.listen(port,()=>{console.log(` server is running on this port ${port}`)})
