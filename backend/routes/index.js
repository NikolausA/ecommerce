const express = require("express");

const router = express.Router();

router.use("/admin-panel", require("./admin"));
// router.use("/posts", require("./post"));

module.exports = router;
