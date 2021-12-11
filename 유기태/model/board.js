const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Body:{                  
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        default:Date.now
    }
});

module.exports=mongoose.model("post",postSchema);