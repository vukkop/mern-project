const { Listing } = require("../models/listing.model");
const {
  updateImageList,
  addImage,
  cleanupDeletedImage,
} = require("../helpers/imageHelpers");

// its a one to one for reference
// sample req body
// req.body = {
//   imgId: '1234',
//   listingId: '12345',
//   imgUrl: 'something',
//   imgName: 'testyboi',
// }

module.exports.addImageToListing = async (req, res) => {
  try {
    const imgObj = {
      imgUrl: req.body.imgUrl,
      listingId: req.body.listingId,
      name: req.body.name,
      publicId: req.body.publicId,
    };
    const status = await addImage(imgObj);
    if (status) {
      res.status(200).json("Image added to listing");
    }
  } catch (err) {
    res.status(500).json(err);
  }

  // same thing as delete, but easier ✔
  // already saved to cloudinary, response body should have properties for image ✔
  // look up listing ✔
  // create the object from req body ✔
  // use the .push method to add the new obj in ✔
  // save the listing (listing.findandupdate) ✔
  // if all goes well 200 response✔
};

module.exports.updateImage = async (req, res) => {
  try {
    const imgObj = {
      imgId: req.body.imgId,
      listingId: req.body.listingId,
      imgUrl: req.body.imgUrl,
      name: req.body.imgName,
    };
    const status = await updateImageList(imgObj);
    if (status) {
      res.status(200).json("Image was updated!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
  // if not already updated in cloudinary, create a helper that updates the cloudinary properties
  // create imgObj from req body (again)
  // the following logic can probably be abstracted from the already built function
  // ***find the listing, grab the array
  // ***find the matching imgobj in the array
  // consider abstracting those two functions as new helpers in the file
  // this will allow you to call the same functions within the individual helpers
  // ez pz
  // update the values in it
  // save the listing with the new array (listing.findandupdate)
  // if all goes well 200 response
};

module.exports.deleteImageFromAListing = async (request, response) => {
  try {
    // we need to build the imgObj from the req body:
    const imgObj = {
      imgId: request.body.imgId,
      listingId: request.body.listingId,
      imgUrl: request.body.imgUrl,
      name: request.body.imgName,
    };
    // creating so we can add to it later
    let msg = "";
    // creating a var thats set to the return of cleanupDeletedImage
    // this will return an obj that has 2 keys that hopfully are both true
    const status = await cleanupDeletedImage(imgObj);
    //
    if (status.cloudDelete && status.cleanListing) {
      return response.status(200).json("WE DID IT");
    }
    if (!status.cloudDelete) {
      msg += "Unable to delete from Cloudinary.";
    }
    if (!status.cleanListing) {
      msg += " Unable to delete from listing array in DB.";
    }
    return response.status(400).json(msg);
  } catch (err) {
    // this will catch any errors thrown in cleanupDeletedImage
    response.status(500).json(err);
  }
};

//TODO:
