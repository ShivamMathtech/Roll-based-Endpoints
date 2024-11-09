const showorderById = (req, res) => {
  res.send(`Order with ID: ${req.params.orderId} has been fetched.`);
};

module.exports = showorderById;
