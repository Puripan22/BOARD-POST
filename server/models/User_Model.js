const mongoose = require("mongoose");
const { type } = require("os");
const userSchema = mongoose.Schema(
    {
        Username:{
            type: String,
            require: true,
        },
        Email:{
            type:String,
            require: true,
        },
        Password:{
            type:String,
            require: true,
        },
        Token:{
            type:String,
            require:true
        }
        
    }
)
module.exports = mongoose.model("user", userSchema,"user");