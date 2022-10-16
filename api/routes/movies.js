
const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema(
    {
        title:{title:String,required:true,unique:true},
        desc:{type:String},
        img:{type:String},
        imgTitle:{type:Array},
        imgSm:{type:String},
        trailer:{type:String},
        video:{type:Array},
        year:{type:String},
        limit:{type:Number},
        genre:{type:Array},
        isSeries:{type:Boolean,deafult:false}
    },
    {timestamps:true}
    
);

module.exports = mongoose.model("Movie",MoviesSchema);