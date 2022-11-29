const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username:{
        type: String,
        trim: true,
        required: true
    },
    email:{
        type:String,
        trim:true,
        required: true
    },
    name: {
        type: String,
        trim:true,
        required: true
    },
    age: {
        type: Number,
        trim:true,
        hidden:{
            default:false
        }
    },
    password:{
        type: String,
        trim: true,
        required: true
    },
    numberPets:{
        type: Number,
        trim: true,
        default: 0
    },
    publications:{
        type:Number,
        trim:true,
        default: 0
    }
},{ timestamps: false})

module.exports = mongoose.model("User", userSchema);