const showproductlist = (req, res) => {
  res.status(200).json({
    message: "List of products",
  });
};

module.exports = showproductlist;
