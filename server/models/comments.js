const mongoose = require('mongoose');
const {Schema} = mongoose;

let commentsSchema = new Schema ({
    productId : {
        type: mongoose.Types.ObjectId,
        ref: "products"
    },
    userName: {
        type: String,
    },
    postedOn: {
        type: Date
    },
    comment: { 
        type: String,
    },
    rating: { 
        type: Number
    },
    isDelete : {
        type : Boolean,
        default : false
    }
}, { timestamps: true });

let comments = mongoose.model("comments", commentsSchema);
module.exports = comments;
