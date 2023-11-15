const mongoose = require("mongoose");
const { Schema } = mongoose;

let transactionsSchema = new Schema(
  {
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    orderID: {
      type: mongoose.Types.ObjectId,
      ref: "orders",
    },
    totalProductsPrice: {
      type: Number,
    },
    shippingCharges: {
      type: Number,
      default: 0
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

  },
  { timestamps: true }
);

// Define a virtual property for 'totalPrice'
transactionsSchema.virtual('totalPrice').get(function () {
  return this.totalProductsPrice + this.shippingCharges;
});

let transactions = mongoose.model("transactions", transactionsSchema);
module.exports = transactions;
