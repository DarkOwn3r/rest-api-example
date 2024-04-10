const router = require("express").Router();
const userRouter = require("./user.router.js");

router.User("/user", userRouter);

module.exports = router;