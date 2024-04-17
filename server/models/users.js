const mongoose = require('mongoose');
const { Schema } = mongoose;

let usersSchema = new Schema ({
    firstName : {
        type : String,
        trim: true,
        // required: 'Name is required',
    },
    role: { 
        type: String, 
        default: 'USER' 
    },
    phoneNumber : {
        type: String,
        minlength: 10,
        maxlength: 10,
        // unique : true,
        trim: true,
        // required: 'Phone number is required',
    },
    salt: {
        type: String,
    },
    email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { 
        type: String, 
        default: 'USER' 
    },
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false }
}, { timestamps: true })

let users = mongoose.model("users", usersSchema);
module.exports = users
