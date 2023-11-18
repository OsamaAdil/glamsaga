const mongoose = require("mongoose");
const { Schema } = mongoose;

let transactionsSchema = new Schema(
  {
    customerID: {
      type: mongoose.Types.ObjectId,
      ref: "customers",
    },
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
    totalProductsPrice: {
      type: Number,
    },
    shippingCharges: {
      type: Number
    },
    paymentMethod: {
      type: String,
      // enum: {
      //   values: ["Cash On Delivery", "Online", "Wallet", "Mixed"],
      //   message: "This is not allowed",
      // },
      // default: "Online"
    },
    status: { 
        type: String, 
        default: "PENDING" 
      // enum: {
      //   values: ["PENDING", "PROCESSING", "CONFIRMED", "ONHOLD", "CANCELED", "FAILED"],
      //   message: "This is not allowed",
      // },
    }, 
    isDelete: {
      type: Boolean,
      default: false
    }


  },
  { timestamps: true }
);

// Define a virtual property for 'totalPrice'
transactionsSchema.virtual('totalPrice').get(function () {
  return this.totalProductsPrice + this.shippingCharges;
});

let transactions = mongoose.model("transactions", transactionsSchema);
module.exports = transactions;
