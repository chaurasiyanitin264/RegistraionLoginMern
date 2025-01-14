const express= require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
const bodyparser = require('body-parser');
const UserRoute= require("./routes/userRoute");

mongoose.connect("mongodb://127.0.0.1:27017/6pmloginsystem").then(()=>{
    console.log("DB connected!");
})

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/user", UserRoute);


app.listen(8000, ()=>{
    console.log("Server run on 8000 port!");
})