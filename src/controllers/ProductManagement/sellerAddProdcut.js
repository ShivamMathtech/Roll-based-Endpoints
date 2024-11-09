const sellerAddItem = (req, res) => {
  // Implement your code here to add a new item to the seller's cart
  res.status(200).json({
    message: "Item added to cart successfully",
  });
};

module.exports = sellerAddItem;
