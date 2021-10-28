const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Name:{
        type:String,
        unique:true,
        required:true
    },
    ID:{
        type:String,
        unique:true,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("users",userSchema);