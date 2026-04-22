
const express = require("express");
const router = express.Router();


router.use("/auth", require("../modules/auth/auth.routes"));
router.use("/blog", require("../modules/blog/blog.routes"));

module.exports = router;