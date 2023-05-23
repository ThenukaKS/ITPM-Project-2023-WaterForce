const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  shop_name: {
    type: String,
    required: [true, "Shop name is required."],
  },
  city: {
    type: String,
    required: [true, "City is required."],
  },
  district: {
    type: String,
    required: [true, "District is required."],
  },
  shop_address: {
    type: String,
    required: [true, "Shop address is required."],
  },
  price_per_1l: {
    type: String,
    required: [true, "Price per 1L is required."],
  },
  telephone: {
    type: Number,
    required: [true, "Telephone is required."],
  },
  directions: {
    type: String,
    required: [true, "Directions are required."],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
});

const supplier = mongoose.model("supplier", supplierSchema);
module.exports = supplier;
