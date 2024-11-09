const express = require("express");
const app = express();
// Using the environmental variables using dotenv
const env = require("dotenv");
const authRouter = require("./routes/authRoutes/authRouter");
const productRouter = require("./routes/productRoutes/ProductRouter");
env.config();
app.use("/auth", authRouter);
app.use("/products", productRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
