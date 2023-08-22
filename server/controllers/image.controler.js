const { Image } = require("../models/image.model");
const { Listing } = require("../models/listing.model");

module.exports.getAllImages = async (request, response) => {
  try {
    const allImages = await Image.find().then((allImages) => {
      response.json(allImages);
    });
  } catch (err) {
    response.status(400).json(err);
  }
};

module.exports.getImagesForOneListing = async (request, response) => {
  Image.find({ listing: request.params.listingId })
    .then((images) => response.json(images))
    .catch((err) => response.status(400).json(err));
};

module.exports.createImageList = (request, response) => {
  const listingID = req.params.listingId;
  const newImageList = new Comment(req.body);
  newImageList.listing = listingID;
  newImageList
    .save()
    .then((imageList) => {
      const listing = Listing.findOne({ _id: listingID }).then(
        (foundListing) => {
          foundListing.images.push(newImageList);
          foundListing.save().then((response) => res.json(response));
        }
      );
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.updateImage = async (request, response) => {
  try {
    const updateImage = await Image.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true, runValidators: true }
    );
    response.json(updateImage);
  } catch (err) {
    response.status(400).json(err);
  }
};

// its a one to one in reference

module.exports.deleteImageFromAListing = async (request, response) => {
  try {
    const listingId = request.params.listingID;
    const deleteImage = await Image.findOneAndDelete({
      _id: request.params.imageId,
    });
    listing.images.pull(deleteImage._id);
    await listing.save();
  } catch (err) {
    response.status(400).json(err);
  }
};
