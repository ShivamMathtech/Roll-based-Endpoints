const express = require("express");
const registerCtrls = require("../../controllers/authctrls/registerCtrls");
const { loginCtrls } = require("../../controllers/authctrls/loginCtrls");
const authRouter = express.Router();

// Middleware for JWT authentication
// this is the functionality handling of the register controller
authRouter.post("/register", registerCtrls);
// this is the functionality handlling the login controller
authRouter.post("/login", loginCtrls);
// this is the functionality handlling the logout controller
authRouter.post("/logout", loginCtrls);

// Forget Password and Reset Password routes
authRouter.post("/forget-password", (req, res) => {
  // Logic for resetting password goes here
  res.status(200).json({
    message: "Reset password link sent to your registered email",
  });
});

// Middleware for JWT authentication
authRouter.put("/reset-password", (req, res) => {
  // Logic for resetting password goes here
  res.status(200).json({
    message: "Password reset successfully",
  });
});

module.exports = authRouter;
