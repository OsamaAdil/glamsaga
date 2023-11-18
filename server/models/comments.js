const mongoose = require('mongoose');
const {Schema} = mongoose;

let commentsSchema = new Schema ({
    productId : {
        type: mongoose.Types.ObjectId,
        ref: "products"
    },
    userDetails: {
        name: String,
        postedOn: Date
    },
    commentDetails: { 
        comment: String,
        rating: Number
    },
    isDelete : {
        type : Boolean,
        default : false
    }
}, { timestamps: true });

let comments = mongoose.model("comments", commentsSchema);
module.exports = comments;

