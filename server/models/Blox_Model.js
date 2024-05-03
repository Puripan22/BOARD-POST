const mongoose = require("mongoose");
const bloxSchema = mongoose.Schema(
    {
        title:{
            type: String,
            require: true
        },
        content:{
            type: String,
            require: true
        },
        tag:{
            type: String,
            //require: false
        },
        by:{
            type: String,
            require: false
        }
    }
)
//const bloxcomponents = mongoose.model("bloxcomponents",bloxSchema,"blox_components");
module.exports = mongoose.model("blox_components",bloxSchema,"blox_components");