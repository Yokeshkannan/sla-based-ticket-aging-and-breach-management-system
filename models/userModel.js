const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    role:{
        type:String,
        enum:["USER","AGENT","ADMIN"],
        default:"USER"
    },
    password:String
})

module.exports = mongoose.model("User",userSchema) //creating a model for user schema
