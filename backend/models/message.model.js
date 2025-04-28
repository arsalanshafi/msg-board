const { Timestamp } = require("bson");
const mongoose = require("mongoose");


const msgSchema = mongoose.Schema(
    {
        body:{
            type:String,
            required:[true,"body is required"]
        },
    },
    {
        timestamps:true
    }
)


const msg = mongoose.model("message",msgSchema);

module.exports = msg;