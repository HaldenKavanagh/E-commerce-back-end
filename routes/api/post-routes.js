const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// http://localhost:3001/api/post/products
router.post("/products", async (req, res) => {
  try {
    const { product_name, price, stock, category_id } = req.body;

    if (!product_name || !price || !stock || !category_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newProduct = await Product.create({
      product_name,
      price,
      stock,
      category_id,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// http://localhost:3001/api/post/categories
router.post("/categories", async (req, res) => {
  try {
    const { category_name } = req.body;

    if (!category_name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newCategory = await Category.create({
      category_name,
    });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// http://localhost:3001/api/post/tags
router.post("/tags", async (req, res) => {
  try {
    const { tag_name } = req.body;

    if (!tag_name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newTag = await Tag.create({
      tag_name,
    });

    res.status(201).json(newTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// http://localhost:3001/api/post/producttags
router.post("/producttags", async (req, res) => {
  try {
    const { product_id, tag_id } = req.body;

    if (!product_id || !tag_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newProductTag = await ProductTag.create({
      product_id,
      tag_id,
    });

    res.status(201).json(newProductTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
