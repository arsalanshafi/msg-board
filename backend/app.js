const express = require("express");
const { PORT } = require("../config");
const msgRoute = require("./routes/msg.api")

const app = express();
app.use("/msg/api",msgRoute);

app.get("/",(req,res)=>{
    res.send("hello world");
})


app.listen(PORT,()=>console.log(`app is listening on port ${PORT}`));