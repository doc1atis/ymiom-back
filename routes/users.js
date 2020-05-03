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
router.get("/uploads", authStrategy("jwt"), (req, res) => {
  console.log(req.user);
  res.status(200).json({ olgy: "koma" });
});

router.post("/uploads", authStrategy("jwt"), (req, res) => {
  console.log(req.user);
  res.status(200).json({ olgyta: "komate" });
});

module.exports = router;
