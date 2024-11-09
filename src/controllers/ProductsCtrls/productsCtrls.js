const productsShowlist = (req, res) => {
  //Show the list of the items randomly
  res.status(200).json({
    message: "Products showlist",
    // Sort the products array randomly
  });
};

module.exports = {
  productsShowlist,
};
