const updateSellerProduct = (req, res) => {
  // Update the product in the database
  res.status(200).json({
    message: "Product updated successfully!",
  });
};

module.exports = {
  updateSellerProduct,
};
