const { Listing } = require("../models/listing.model");

module.exports.getAllListings = (request, response) => {
  console.log('GETTING ALL LISTINGS *****')
  Listing.find()
    .then((allListings) => {
      response.json(allListings);
    })
    .catch((err) => response.status(400).json(err));
};

module.exports.getOneListing = async (request, response) => {
  try {
    const oneListing = await Listing.findOne({ _id: request.params.id });
    response.json(oneListing);
  } catch (err) {
    response.status(400).json(err);
  }
};

module.exports.createListing = (request, response) => {
  Listing.create(request.body)
    .then((newListing) => response.json(newListing))
    .catch((err) => response.status(400).json(err));
};

module.exports.updateListing = async (request, response) => {
  try {
    const updateListing = await Listing.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true, runValidators: true }
    );
    response.json(updateListing);
  } catch (err) {
    response.status(400).json(err);
  }
};

module.exports.deleteListing = (request, response) => {
  Listing.deleteOne({ _id: request.params.id })
    .then((result) => {
      response.json(result);
    })
    .catch((err) => response.status(400).json(err));
};
