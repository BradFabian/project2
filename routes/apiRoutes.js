var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/inventory", function(req, res) {
    db.products.findAll({}).then(function(dbgoGetIt) {
      res.json(dbgoGetIt);

    });
  });

 
};
