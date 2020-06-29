const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose"); 
const Schema = mongoose.Schema; 

const UserSchema = new Schema ({
    userName: {
        type: String,
        required: true
    }, 
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }
}); 

UserSchema.plugin(passportLocalMongoose)

module.exports = User = mongoose.model("user", UserSchema); 