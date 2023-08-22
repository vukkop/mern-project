const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = mongoose.Schema(
  {
    imgName: {
      type: String,
      required: [true, "Image name is required."],
    },
    url: {
      type: String,
      required: [true, "Image Url is required."],
    },
    isPrimary: {
      type: Boolean,
      default: false,
    },
    listing: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
    },
  },

  { timestamps: true }
);

module.exports.Listing = mongoose.model("Image", ImageSchema);
