const router = require("express").Router();
const getRoutes = require("./get-routes");
const postRoutes = require("./post-routes");
const idRoutes = require("./get-by-id");
const putRoutes = require("./put-routes");
const deleteRoutes = require("./delete-routes");

router.use("/get", getRoutes);
router.use("/post", postRoutes);
router.use("/id", idRoutes);
router.use("/put", putRoutes);
router.use("/delete", deleteRoutes);

module.exports = router;
