const profileCtrls = (req, res) => {
  res.status(200).json({
    message: "Profile controller",
    user: req.user,
    token: req.token,
  });
};

module.exports = profileCtrls;
