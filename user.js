const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    city : String , 
    street : String
})

const userSchema = new mongoose.Schema({
    name : String , 
    age : Number,
    email : {
        type : String , 
        lowercase : true , 
        required : true,
    }, 
    createdAt : Date , 
    updatedAt : Date , 
    bestFriend : {
        type : mongoose.SchemaTypes.ObjectId, 
        ref : "User"
    },
    hobbies : [String] , 
    address : addressSchema
})

module.exports = mongoose.model('User',userSchema)

