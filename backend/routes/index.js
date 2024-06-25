const express = require("express");

const router = express.Router();

router.use("/", require("./auth"));
router.use("/admin-panel", require("./admin"));
router.use("/products", require("./product"));

module.exports = router;
