const express = require("express");
const {
  productsShowlist,
} = require("../../controllers/ProductsCtrls/productsCtrls");
const {
  showProductsById,
} = require("../../controllers/ProductsCtrls/productsShowId");
const showByCategoryCtrls = require("../../controllers/ProductsCtrls/showbyCategoriCtrls");
const productRouter = express.Router();
productRouter.get("/", productsShowlist);
productRouter.get("/products/:id", showProductsById);
productRouter.get("/category", showByCategoryCtrls);

productRouter.get("/search", (req, res) => {
  res.status(200).json({ message: "Search products by keyword" });
});
module.exports = productRouter;
