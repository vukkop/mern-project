const ImageController = require("../controllers/image.controler");

module.exports = function (app) {
  app.get("/api/image/all/:listingId", ImageController.);
  app.post("/api/image", ImageController.);
  app.put("/api/image/:id", ImageController.);
  app.delete("/api/image/:listingId/:id", ImageController.);
};
