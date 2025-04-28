const express = require("express");
const msg = require("../models/message.model");

const msgRoute = express.Router();

msgRoute.use(express.json());

msgRoute.put("/upload",async (req,res)=>{
    // console.log("api was hit")
    await msg.insertOne(req.body)
    res.status(200).json(req.body);
})

msgRoute.get("/get", async (req,res)=>{
    const messages = await msg.find({});
    res.status(200).json(messages);

})

module.exports = msgRoute