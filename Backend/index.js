const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/userRoutes");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/user", UserRoutes);


  mongoose.connect("mongodb://127.0.0.1:27017/Email")
  .then(() => {
    console.log("DB Connected");
  })
 


app.listen(9000, () => {
  console.log("Server running on port 8000");
});
