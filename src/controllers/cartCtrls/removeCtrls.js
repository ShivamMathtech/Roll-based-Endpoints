const removeCtrls = (req, res) => {
  res.status(200).json({
    message: "Remove controller route is working",
  });
};

module.exports = removeCtrls;
