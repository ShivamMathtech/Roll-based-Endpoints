const express = require("express");
const { addCartCtrls } = require("../../controllers/cartCtrls/addCartCtrls");
const {
  showCartItems,
} = require("../../controllers/cartCtrls/showCartItemCtrls");
const cartItemUpdate = require("../../controllers/cartCtrls/cartUpdateCtrls");
const removeCtrls = require("../../controllers/cartCtrls/removeCtrls");
const cartRouter = express.Router();
cartRouter.post("/add", addCartCtrls);
cartRouter.get("/", showCartItems);
cartRouter.put("/update/:itemId", cartItemUpdate),
  cartRouter.delete("/remove/:id", removeCtrls);
module.exports = cartRouter;
