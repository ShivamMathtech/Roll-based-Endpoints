const showProductsById = (req, res) => {
  res.json({ message: "This is the product with id" + req.params.id });
};

module.exports = {
  showProductsById,
};
