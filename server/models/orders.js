const mongoose = require('mongoose');
const {Schema} = mongoose;

let orderDetailsSchema = new Schema ({
    productDetails: [{
        productVariantId : {
            type: mongoose.Types.ObjectId,
            ref: "productVariants"
        },
        productId : {
            type: mongoose.Types.ObjectId,
            ref: "products"
        },
        itemCount: {
            type: Number,
        }, 
    }],
    isActive : {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

let orderDetails = mongoose.model("orderDetails", orderDetailsSchema);
module.exports = orderDetails;
