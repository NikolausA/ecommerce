const express = require("express");
const hasRole = require("../middlewares/hasRole");
const authenticated = require("../middlewares/authenticated");
const fileUpload = require("../middlewares/file-upload");
const { addProduct, getProducts } = require("../controllers/product");
const mapProduct = require("../helpers/mapProduct");
const ROLES = require("../constants/roles");

const router = express.Router({ mergeParams: true });

// router.get("/products", async (req, res) => {
//   const { products, totalProducts } = await getProducts();
//   res.send({ data: products.map(mapProduct) });
// });

router.post(
  "/upload",
  authenticated,
  hasRole([ROLES.ADMIN]),
  fileUpload.single("product-image"),
  (req, res) => {
    try {
      if (req.file) {
        const filePath = `/${req.file.path.replace(/\\/g, "/")}`;
        res.send({ path: filePath });
      }
    } catch (e) {
      console.log(e);
    }
  }
);

router.post("/products", async (req, res) => {
  const { name, category, price, quantity, imageUrl } = req.body;
  const addedProduct = await addProduct({
    name,
    category,
    price,
    quantity,
    imageUrl,
  });

  res.send({ data: addedProduct });
});

module.exports = router;
