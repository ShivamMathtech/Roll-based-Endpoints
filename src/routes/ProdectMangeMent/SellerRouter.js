const express = require("express");
const sellerAddItem = require("../../controllers/ProductManagement/sellerAddProdcut");
const showproductlist = require("../../controllers/ProductManagement/showproductlist");
const {
  updateSellerProduct,
} = require("../../controllers/ProductManagement/updatesellerProduct");
const deltesellerProductsCtrls = require("../../controllers/ProductManagement/deleteSelleProduct");
const {
  orderSeller,
} = require("../../controllers/orderHandlling/sellerOrders");
const sellerOrderStatus = require("../../controllers/orderHandlling/orderstatusSeller");
const sellerRouter = express.Router();
sellerRouter.post("/products", sellerAddItem);
sellerRouter.get("/products", showproductlist);
sellerRouter.put("/products/:id", updateSellerProduct);
sellerRouter.delete("/products/:id", deltesellerProductsCtrls);
sellerRouter.get("/orders", orderSeller);
sellerRouter.delete("/orders/:id/status", sellerOrderStatus);
sellerRouter.get("/analytics", (req, res) => {
  res.status(200).json({ message: "Analytics page" });
});
sellerRouter.get("/analytics/product/:id", (req, res) => {
  res.status(200).json({ message: "Product analytics page" });
});
module.exports = sellerRouter;
