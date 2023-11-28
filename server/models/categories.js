const mongoose = require('mongoose');
const {Schema} = mongoose;

let categoriesSchema = new Schema ({
    name: {
        type: String,
    },
    isDelete : {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

let categories = mongoose.model("categories", categoriesSchema);
module.exports = categories;