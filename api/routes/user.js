const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:{title:String,required:true,unique:true},
        email:{title:String,required:true,unique:true},
        password:{title:String,required:true},
        profilePic:{type:String,default:""},
        isAdmin:{type:Boolean,default:false},
    },
    {timestamps:true}
    
);

module.exports = mongoose.model("User",UserSchema);