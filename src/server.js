const express = require("express");
const app = express();
// Using the environmental variables using dotenv
const env = require("dotenv");
const authRouter = require("./routes/authRoutes/authRouter");
const productRouter = require("./routes/productRoutes/ProductRouter");
const cartRouter = require("./routes/cartRoutes/CartRouter");
const orderRouter = require("./routes/orderRoute/orderRouter");
const userRouter = require("./routes/userRoute/userRouter");
const sellerRouter = require("./routes/ProdectMangeMent/SellerRouter");
env.config();
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/orders", orderRouter);
app.use("/users", userRouter);
app.use("/seller", sellerRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
