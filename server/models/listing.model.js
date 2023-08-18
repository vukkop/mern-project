const mongoose = require("mongoose");

const ListingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    type: {
      type: String,
      required: [true, "Type is required."],
    },
    numOfBedrooms: {
      type: Number,
      required: [true, "Number of bedrooms is required."],
      min: [0, "Number of bedrooms must be greter than 0."],
      max: [100, "Maximum number of bedrooms must be less than 100."],
    },
    numOfBathrooms: {
      type: Number,
      required: [true, "Number of bathrooms is required."],
      min: [0, "Number of bathrooms must be greter than 0."],
      max: [100, "Maximum number of bathrooms must be less than 100."],
    },
    size: {
      type: Number,
      required: [true, "Size is required."],
      min: [0, "Size must be greter than 0."],
    },
    description: {
      type: String,
      required: [false, ""],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: [true, "Address is required."],
    },
    city: {
      type: String,
      required: [true, "City is required."],
    },
    state: {
      type: String,
      required: [true, "State is required."],
    },
    zipCode: {
      type: String,
      required: [true, "ZIP code is required."],
    },
    imgUrl: {
      type: String,
      required: [true, "Image Url is required."],
    },
  },
  { timestamps: true }
);

module.exports.Listing = mongoose.model("Listing", ListingSchema);
