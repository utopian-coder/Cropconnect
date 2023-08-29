const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the seller
      required: true,
    },

    title: {
      type: String,
      required: [true, "A product must have a title."],
    },

    description: {
      type: String,
      required: [
        true,
        "Please provide a suitable description for the product!",
      ],
    },

    catagory: {
      type: String,
      required: [true, "Mention the catagory of the product"],
    },

    price: {
      type: Number,
      required: [true, "You must provide a base value for the product!"],
    },

    photo: [String],

    soldStatus: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Product = model("Product", productSchema);
module.exports = Product;
