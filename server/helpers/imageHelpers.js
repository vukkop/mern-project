const cloudinary = require("cloudinary").v2;
const { Listing } = require("../models/listing.model");

cloudinary.config({
  cloud_name: "Vuk i need you api keys",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// sample image object
const sampleImgObj = {
  imgId: "1234",
  listingId: "12345",
  imgUrl: "https://something.test.somewhere/poopybraxton",
  name: "awesome braxton",
};

//create ActionEnum to avoid typos
const ActionEnum = {
  update: "update",
  delete: "delete",
};

//ADD IMAGE helper
const addImage = async (imageObj) => {
  let listing;
  try {
    listing = await Listing.findOne({ _id: imageObj.listingId });
    listing.images.push(imageObj);
  } catch (error) {
    throw new Error(error.message ? error.message : error);
  }
  try {
    await Listing.findOneAndUpdate({ _id: imageObj.listingId }, listing, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    throw new Error(error.message ? error.message : error);
  }
  return true;
};

//UPDATE IMAGE helper
const updateImageList = async (imageObj) => {
  const status = {
    updateListing: false,
  };
  let listing;

  try {
    listing = await updateImgArray(ActionEnum.update, imageObj);
  } catch (error) {
    throw new Error(error.message ? error.message : error);
  }
  try {
    const updateListing = await Listing.findOneAndUpdate(
      { _id: imageObj.listingId },
      listing,
      { new: true, runValidators: true }
    );
    if (updateListing) {
      status.updateListing = true;
    }
  } catch (error) {
    throw new Error(error.message ? error.message : error);
  }
  return status;
};

//DELETE IMAGE helper
//this will take in an array of image objects (at least 1), and then clean up the DB so we don't reference images that no longer exist
// We will also use this to ping the cloudinary API in the background so we manage our usage
const cleanupDeletedImage = async (imageObj) => {
  // creating headers?
  const status = {
    cloudDelete: false,
    cleanListing: false,
  };
  // setting a var to the value of whatever is returned for deleteFromCloud function
  try {
    const deletedFromCloud = await deleteFromCloudinary(imageObj.imgId);
    if (deletedFromCloud) {
      status.cloudDelete = true;
    }
  } catch (error) {
    throw new Error("Error deleting from cloudinary:", error);
  }
  // overall goal: => clean up the listing (delete the img url from the array)
  let listing;
  try {
    // this could be a function that we call an await on
    // this funciton would take in 2 args (id for image, action (delete, update))
    // if delete, we would do below
    // if update instead of the splice, we would just replace it with our new object from req body
    // then we just return the new array, and replace the old one on listing

    // then when we need to do the same thing to updateImage, we just call the function again
    // so and instead of removing it we update the values
    // both can return a new array
    // *** THE BELOW LOGIC WAS ABSTRACTED TO A FUNCTION
    // listing = Listing.findOne(imageObj.listingId);
    // loop through images array inside the listing
    // for (let i = 0; i < listing.images.length; i++) {
    //   if (listing.images[i].cloudId === imageObj.imgId) {
    //     listing.images.splice(i, 1);
    //   }
    // }
    listing = await updateImgArray(ActionEnum.delete, imageObj);
    // find the matching image and remove that bitch from the array
  } catch (error) {
    throw new Error(error.message ? error.message : error);
  }
  try {
    const updateListing = await Listing.findOneAndUpdate(
      { _id: imageObj.listingId },
      listing,
      { new: true, runValidators: true }
    );
    if (updateListing) {
      status.cleanListing = true;
    }
  } catch (error) {
    throw new Error(error.message ? error.message : error);
  }

  // we know the listingId is part of the imgObj, so we can use that to query our mongo DB for the listing object
  // once we have the listing object, we can then look for our images array, and check to see if any of the values in that array match our imgId
  // property from the imgObj
  // if we find a match, we need to remove it, so the listing won't show that image anymore
  // once we remove the image from the array, we still need to update the listing in mongo so that it doesn't forget our changes to the listing
  // if the listing updates successfully, then we know next time it is called to display the listing, it won't have this image attached anymore
  // this is why we set our status to true for cleanListing so that the function calling this (cleanupDeletedImage)
  // knows that the listing is good to be called again by the front end
  // once we have a result from saving the new array for the listing, we can change (or not change) the cleanListing status as req
  // at this point we need to check if cloudDelete status is true,
  // if it is NOT, we need to make sure the promise IS resolved, and we aren't waiting on a return from the function
  // any errors thrown in the function will be caught in the first catch, so we shouldn't need to worry about a silent fail
  // We may want to consider throwing the error with additional info from that catch for the controller method (see error handling thoughts later)
  // If we can get a tru/tru status then we can return something to the method calling this so that it can return a result to the frontend
  // We need to make sure that our errors we deliver to that controller function allows for us to set the status code correctly when we return to the FE

  // NOTE: we should probably abstract the delete from array function to keep it clean and allow for easier error handling
  return status;
};

// function to delete images from cloudinary
const deleteFromCloudinary = async (imgId) => {
  //api call here to delete by id if it exists
  try {
    // call the delete
    const deleted = await cloudinary.v2.uploader.destroy("imgId").then();
    if (deleted) {
      return true;
    }
  } catch (error) {
    throw new Error(error.message ? error.message : error);
  }
};

// ABSTRACTING FROM THE DELETE HELPER
// SEE COMMENTS FOR WHY/HOW
// this func takes in the action and imgObj and wil return an updated listing with a new image array
// * note: this does not update mongoDB with the listing
const updateImgArray = async (action, imageObj) => {
  const listing = Listing.findOne(imageObj.listingId);
  // loop through images array inside the listing
  for (let i = 0; i < listing.images.length; i++) {
    if (listing.images[i].cloudId === imageObj.imgId) {
      listing.images.splice(i, 1);
    }
    if (action === ActionEnum.update) {
      listing.images.push(imageObj);
    }
  }
  return listing;
};

module.exports = {
  cleanupDeletedImage,
  addImage,
  updateImageList,
};
