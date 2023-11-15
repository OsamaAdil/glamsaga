const mongoose = require('mongoose');
const { Schema } = mongoose;

let usersSchema = new Schema ({
    firstName : {
        type : String,
        trim: true,
        // required: 'Name is required',
    },
    lastName : {
        type : String,
        trim: true,
        // required: 'Name is required',
    },
    email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phoneNumber : {
        type: String,
        minlength: 10,
        maxlength: 10,
        // unique : true,
        trim: true,
        // required: 'Phone number is required',
    },
    role: { 
        type: String, 
        default: 'USER' 
    },
    transactionIDs: [{
        type: mongoose.Types.ObjectId,
        ref: "transactions",
      }],
    orderIDs: {
        type: mongoose.Types.ObjectId,
        ref: "orders",
    },
    address: {
        type: String,
    },
    landmark: {
        type: String
    },
    pincode: {
        type: Number,
        length: 6,
        // required: 'pin code is required'
    },
    city: {
        type: String,
        // required: 'city name is required'
    },
    state: {
        type: String,
        // enum : {
        //     values: ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"], 
        //     message: "This is not allowed"
        // },
        // required: 'state  is required'
    },
    isActive: { 
        type: Boolean, 
        default: true 
    },
    isDelete: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false }
}, { timestamps: true })

usersSchema.virtual('fullName').get(function () {
    return this.firstName + this.lastName;
  });

let users = mongoose.model("users", usersSchema);
module.exports = users

