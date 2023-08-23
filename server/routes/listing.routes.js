const ListingController = require("../controllers/listing.controller");
const ImageController = require("../controllers/image.controler");

module.exports = function (app) {
  app.get("/api/listing/all", ListingController.getAllListings);
  app.get("/api/listing/:id", ListingController.getOneListing);
  app.post("/api/listing", ListingController.createListing);
  app.put("/api/listing/:id", ListingController.updateListing);
  app.delete("/api/listing/:id", ListingController.deleteListing);

  app.post("/api/image/add", ImageController.addImageToListing);
  app.post("/api/image/update", ImageController.updateImage);
  app.delete("/api/image/delete", ImageController.deleteImageFromAListing);
};

