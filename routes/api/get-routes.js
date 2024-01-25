const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// http://localhost:3001/api/get/products
router.get("/products", async (req, res) => {
  try {
    const dbProductData = await Product.findAll();
    if (!dbProductData) {
      return res.status(404).json({ message: "Products not found" });
    }
    const products = dbProductData.map((productList) =>
      productList.get({ plain: true })
    );

    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/get/categories
router.get("/categories", async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll();
    if (!dbCategoryData) {
      return res.status(404).json({ message: "Categorys not found" });
    }
    const categories = dbCategoryData.map((categoryList) =>
      categoryList.get({ plain: true })
    );

    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/get/tags
router.get("/tags", async (req, res) => {
  try {
    const dbTagData = await Tag.findAll();
    if (!dbTagData) {
      return res.status(404).json({ message: "Tags not found" });
    }
    const tags = dbTagData.map((tagList) => tagList.get({ plain: true }));

    res.status(200).json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//localhost:3001/api/get/producttags
http: router.get("/producttags", async (req, res) => {
  try {
    const dbProductTagData = await ProductTag.findAll();
    if (!dbProductTagData) {
      return res.status(404).json({ message: "Product tags not found" });
    }
    const producttags = dbProductTagData.map((productTagList) =>
      productTagList.get({ plain: true })
    );

    res.status(200).json(producttags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
