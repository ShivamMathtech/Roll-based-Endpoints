const deltesellerProductsCtrls = (req, res) => {
  // Implement logic to delete seller's products\
  res.status(200).json({
    message: "Seller products deleted successfully",
  });
};

module.exports = deltesellerProductsCtrls;
