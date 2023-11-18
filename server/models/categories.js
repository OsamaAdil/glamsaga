const mongoose = require('mongoose');
const {Schema} = mongoose;

let categoriesSchema = new Schema ({
    name: {
        type: String,
        // enum : {
        //     values: ["Kids", "Accessories","Bagpacks","Diaper Bags and Travel Cases", "Handbags", "Others", "Suitcase and Travel Bags"], 
        //     message: "This is not allowed"
        // }
    },
    isActive : {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

let categories = mongoose.model("categories", categoriesSchema);
module.exports = categories;