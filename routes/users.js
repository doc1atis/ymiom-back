const express = require("express");
const router = express.Router();
const authStrategy = require("../AUTH/passportConfig");
const register = require("../AUTH/register");
const login = require("../AUTH/login");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/register", register);
router.post("/login", authStrategy("local"), login);
module.exports = router;
