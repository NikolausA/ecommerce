const express = require("express");
const hasRole = require("../middlewares/hasRole");
const authenticated = require("../middlewares/authenticated");
const fileUpload = require("../middlewares/file-upload");
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const mapProduct = require("../helpers/mapProduct");
const ROLES = require("../constants/roles");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getProducts();
  res.send({ data: products });
});

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

router.post("/", authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
  const { name, category, description, price, quantity, imageUrl } = req.body;
  const addedProduct = await addProduct({
    name,
    category,
    description,
    price,
    quantity,
    imageUrl,
  });

  res.send({ data: addedProduct });
});

router.patch(
  "/:productId",
  authenticated,
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    const newProductData = req.body;
    const updatedProduct = await updateProduct(
      req.params.productId,
      newProductData
    );
    res.send({ data: updatedProduct });
  }
);

router.delete(
  "/:productId",
  authenticated,
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    const response = await deleteProduct(req.params.productId);
    res.send({ data: response });
    // try {
    //   const response = await deleteProduct(req.params.id);
    //   if (response.deletedCount === 0) {
    //     console.log("'No documents matched query. Nothing was deleted.'");
    //   } else {
    //   }
    // } c  res.send({ data: response });
    //   atch (e) {
    //   console.log("Error: ", e);
    // }
  }
);

module.exports = router;
