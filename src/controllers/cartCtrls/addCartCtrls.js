const addCartCtrls = (req, res) => {
  res.status(200).json({
    message: "Cart Controls data has been updated",
    // Add any necessary cart controls here (e.g., add to cart, remove from cart, etc.)
  });
};

module.exports = {
  addCartCtrls,
};
