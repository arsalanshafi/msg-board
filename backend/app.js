const express = require("express");
const { PORT , connection_string } = require("./config");
const msgRoute = require("./routes/msg.api");
const mongoose = require("mongoose");
// const msg = require("./models/message.model");

const app = express();
app.use("/msg/api",msgRoute);

app.get("/",(req,res)=>{
    res.send("hello world");
})


mongoose.connect(connection_string)
.then(()=>{
    console.log("db is connectd");
    app.listen(PORT,()=>{console.log(`app is listening on port ${PORT}`)});
})