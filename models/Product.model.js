const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Title is required"]
    },
    description: {
      type: String,
      required: [true, "Description is required"]
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model("Product", productSchema);
module.exports = Product;