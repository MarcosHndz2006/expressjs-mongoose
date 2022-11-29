const mongoose = require('mongoose');
const schema = mongoose.Schema;

const petSchema = new schema({
    id:{
        type: Number,
        trim: true,
        required: true
    },
    name:{
        type:String,
        trim:true,
        required:true,
        default: "no_name_yet"
    },
    type:{
        type:String,
        trim:true,
        required:true
    },
    breed:{
        type:String,
        trim:true,
        required:true
    },
    publications:{
        type:Number,
        trim:true,
        default: 0
    }
},{timestamps:false});

module.exports = mongoose.model("Pet", petSchema);