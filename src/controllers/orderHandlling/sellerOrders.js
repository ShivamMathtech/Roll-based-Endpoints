const orderSeller = (req, res) => {
  // Your code for orderSeller goes here
  res.status(200).json({
    message: "Order successfully placed",
  });
};

module.exports = {
  orderSeller,
};
