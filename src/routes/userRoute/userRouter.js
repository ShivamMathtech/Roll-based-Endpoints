const express = require("express");
const profileCtrls = require("../../controllers/users/profileCtrls");
const prfileUpdateCtrls = require("../../controllers/users/profileUpdateCtrls");
const userRouter = express.Router();
userRouter.get("/profile", profileCtrls);
userRouter.put("/profile/update", prfileUpdateCtrls);
module.exports = userRouter;
