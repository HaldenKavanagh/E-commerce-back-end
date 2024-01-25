const router = require("express").Router();
const getRoutes = require("./get-routes");

router.use("/get", getRoutes);

module.exports = router;
