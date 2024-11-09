const loginCtrls = (req, res) => {
  // All the login logics are written here
  // For example, you might use a database to authenticate the user's credentials
  // And then set a JWT token in the response
  res.status(200).json({
    message: "Login successful",
    token: "your_jwt_token_here", // Replace 'your_jwt_token_here' with the actual JWT token generated for the user
  });
};

module.exports = {
  loginCtrls,
};
