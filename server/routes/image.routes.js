const ImageController = require("../controllers/image.controler");

module.exports = function (app) {
  app.post("/api/image/add", ImageController.addImageToListing);
  app.post("/api/image/update", ImageController.updateImage);
  app.delete("/api/image/delete", ImageController.deleteImageFromAListing);
};

// ex frontend
//
