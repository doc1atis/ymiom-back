const express = require("express");
const router = express.Router();
const upload = require("../HELPERS/uploadSong");
const songController = require("../controllers/songController");
// UPLOAD A SONG
router.post("/upload", upload.single("cover-image"), songController.uploadSong);

router.get("/search", (req, res) => {
  res.json({ song: "dope" });
});

module.exports = router;
