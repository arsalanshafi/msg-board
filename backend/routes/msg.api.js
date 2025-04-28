const express = require("express");

const msgRoute = express.Router();

msgRoute.use(express.json());

msgRoute.put("/upload",(req,res)=>{
    console.log("api was hit")
    res.status(200).json(req.body);
})

module.exports = msgRoute