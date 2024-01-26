const router = require("express").Router();

const { Product, Category, Tag, ProductTag } = require("../../models");

//  http://localhost:3001/api/delete/products/:id

router.delete("/products/:id", (req, res) => {
  // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedProduct) => {
      res.json(deletedProduct);
    })
    .catch((err) => res.json(err));
});

//  http://localhost:3001/api/delete/categories/:id

router.delete("/categories/:id", (req, res) => {
  // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

//  http://localhost:3001/api/delete/tags/:id

router.delete("/tags/:id", (req, res) => {
  // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedId) => {
      res.json(deletedId);
    })
    .catch((err) => res.json(err));
});

//  http://localhost:3001/api/delete/producttags/:id

router.delete("/producttags/:id", (req, res) => {
  // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
  ProductTag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedProductId) => {
      res.json(deletedProductId);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
