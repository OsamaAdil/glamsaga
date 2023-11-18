const mongoose = require ('mongoose');
const {Schema} = mongoose;

let productsSchema = new Schema ({
    genreId: {
        type: mongoose.Types.ObjectId,
        ref: "genre",
    },
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    discountPercent: {
        type: Number,
        min: 1,
        max: 100
    },
    shippingCharge: {
        type: Number,
    },
    material: { 
        type: String, 
        // enum: {
        //     values: ["100% Polyester","100% Polyurethane","Abs","Blend","Carbon Fiber","Fabric","Faux Leather","Genuine Leather","Leather","Metal","Others","Pc","Pu","Pvc","Plastic","Polyamide","Polycarbonate","Polyoxymethylene Plastic","Polypropylene","Tpu"],
        //     message: "This is not allowed"
        // }
    },
    pattern: { 
        type: String, 
        // enum: {
            // values: ["Embellished","Perforated","Quilted","Shimmer","Solid","Studded","Textured","Woven"],
            // message: "This is not allowed"
        // }
    },
    type: { 
        type: String, 
        // enum: {
            // values: ["Backpacks", "Beltbags", "Bucket", "Case", "Cross Body", "Diaper Bags", "Others", "Pouch", "Shoulder", "Slings", "Totes"],
            // message: "This is not allowed"
        // }
    },
    occasion: {
        type: String,
    },
    shortDescription: {
        type: String,
    },
    longDescription: {
        type: String,
    },
    category: {
        type: String,
        // enum : {
        //     values: ["Kids", "Accessories","Bagpacks","Diaper Bags and Travel Cases", "Handbags", "Others", "Suitcase and Travel Bags"], 
        //     message: "This is not allowed"
        // }
    },
    defaultImage :{
        type: String
    },
    images: [{
        type: String,
    }],
    video :{
        type: String
    },
    flag: {
        type: String, 
        // enum : {
        //     values: ["New arrivals", "Best sellers", "Classic Collection"], 
        //     message: "This is not allowed"
        // }
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    noOfRatings: {
        type: Number,
    },
    noOfReviews : {
        type: Number,
    },
    comments: [{
        type: String,
    }],
    isStock : {
        type : Boolean,
        default : true
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

productsSchema.virtual('sellingPrice').get(function () {
    return this.price - (this.discountPercent * this.price );
  });
  

let products = mongoose.model("products", productsSchema);
module.exports = products;
