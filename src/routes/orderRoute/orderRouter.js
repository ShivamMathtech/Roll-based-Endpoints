const express = require("express");
const orderCreateCtrls = require("../../controllers/orders/createCtrls");
const { showOrdersList } = require("../../controllers/orders/showOrders");
const showorderById = require("../../controllers/orders/showOrderById");
const orderRouter = express.Router();

// Importing controllers
orderRouter.post("/create", orderCreateCtrls);
orderRouter.get("/", showOrdersList);
orderRouter.get("/:orderId", showorderById);
module.exports = orderRouter;
