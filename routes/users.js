const express = require("express");
const router = express.Router();
const register = require("../AUTH/register");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/register", register);
module.exports = router;
