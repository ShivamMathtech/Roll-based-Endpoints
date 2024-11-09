const prfileUpdateCtrls = (req, res) => {
  // code to update profile goes here
  res.status(200).json({
    message: "Profile updated successfully",
  });
};

module.exports = prfileUpdateCtrls;
