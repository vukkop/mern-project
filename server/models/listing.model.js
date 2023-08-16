const mongoose = require("mongoose");

const ListingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    numOfBedrooms: {
      type: Number,
      required: [true, "Number of bedrooms is required."],
      min: [0, "Number of bedrooms must be greter than 0."],
      max: [100, "Maximum number of bedrooms must be less than 100."],
    },
    description: {
      type: String,
      required: [false, ""],
    },
    imgUrl: {
      type: String,
      required: [true, "Image Url is required."],
    },
  },
  { timestamps: true }
);

module.exports.Pirate = mongoose.model("Listing", ListingSchema);
