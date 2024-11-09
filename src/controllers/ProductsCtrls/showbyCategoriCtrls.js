const showByCategoryCtrls = (req, res) => {
  // logically this
  // should be fetched from database or similar source
  const categories = ["Electronics", "Clothing", "Books", "Home"];
  res.status(200).json({
    categories: categories,
  });
};

module.exports = showByCategoryCtrls;
