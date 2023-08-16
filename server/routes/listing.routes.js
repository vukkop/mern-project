const ListingController = require("../controllers/listing.controller");

module.exports = function (app) {
  app.get("/api/listing/all", ListingController.getAllListings);
  app.get("/api/listing/:id", ListingController.getOneListing);
  app.post("/api/listing", ListingController.createListing);
  app.put("/api/listing/:id", ListingController.updateListing);
  app.delete("/api/listing/:id", ListingController.deleteListing);
};
