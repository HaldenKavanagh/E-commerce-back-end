const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

//  http://localhost:3001/api/id/products/:id

router.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const dbProductData = await Product.findByPk(productId);
    if (!dbProductData) {
      return res.status(404).json({ message: "product not found" });
    }
    const product = dbProductData.get({ plain: true });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//  http://localhost:3001/api/id/categories/:id

router.get("/categories/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const dbCategoryData = await Category.findByPk(productId);
    if (!dbCategoryData) {
      return res.status(404).json({ message: "category not found" });
    }
    const category = dbCategoryData.get({ plain: true });
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//  http://localhost:3001/api/id/tags/:id

router.get("/tags/:id", async (req, res) => {
  try {
    const tagId = req.params.id;
    const dbTagData = await Tag.findByPk(tagId);
    if (!dbTagData) {
      return res.status(404).json({ message: "tag not found" });
    }
    const tag = dbTagData.get({ plain: true });
    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//  http://localhost:3001/api/id/producttags/:id

router.get("/producttags/:id", async (req, res) => {
  try {
    const productTagId = req.params.id;
    const dbProductTagData = await ProductTag.findByPk(productTagId);
    if (!dbProductTagData) {
      return res.status(404).json({ message: "tag not found" });
    }
    const productTag = dbProductTagData.get({ plain: true });
    res.status(200).json(productTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
