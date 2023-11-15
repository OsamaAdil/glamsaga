const mongoose = require('mongoose');
const {Schema} = mongoose;

let productVariantsSchema = new Schema ({
    productId : { 
        type: mongoose.Types.ObjectId,
        ref: "products",
    },
    size: {
        type: String,
        // enum: {
        //     values: ["small", "medium", "large"],
        //     message: "This is not allowed"
        // }
    },
    colour: { 
        type: String, 
        // enum: {
            // values: ["Beige","Black","Blue","Brown","Coral","Cream","Darkbrown","Gold","Green","Grey","Gunmetal","Khaki","Lightblue","Lilac","Maroon","Multi","Natural","Navy","Orange","Peach","Pink","Purple","Red","Rosegold","Silver","Tan","Turquoise","Violet","White","Wine","Yellow","Cream","Darkbrown","Gold","Green","Grey","Gunmetal","Khaki","Lightblue","Lilac","Maroon","Multi","Natural","Navy","Orange","Peach","Pink","Purple","Red","Rosegold","Silver","Tan","Turquoise","Violet","White","Wine","Yellow"],
            // message: "This is not allowed"
        // }
    },
    length: {
        type: Number,
    },
    width: {
        type: Number,
    },
    height: {
        type: Number,
    },
    inStock : {
        type: Boolean,
        default: true
    },
    isActive : {
        type : Boolean,
        default : true
    },
    isDelete : {
        type : Boolean,
        default : false
    }
}, { timestamps: true });

let productVariants = mongoose.model("productVariants", productVariantsSchema);
module.exports = productVariants;

