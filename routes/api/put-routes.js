const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

//  http://localhost:3001/api/put/products/:id

router.put("/products/:id", (req, res) => {
  Product.update(
    {
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch((err) => res.json(err));
});

//  http://localhost:3001/api/put/categories/:id

router.put("/categories/:id", (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

//  http://localhost:3001/api/put/tags/:id

router.put("/tags/:id", (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

//  http://localhost:3001/api/put/producttags/:id

router.put("/producttags/:id", (req, res) => {
  ProductTag.update(
    {
      product_id: req.body.product_id,
      tag_id: req.body.tag_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedProductTag) => {
      res.json(updatedProductTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
