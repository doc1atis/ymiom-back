const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  // ALL THE PROPERTIES OF THE USER
  username: { type: String, required: "email is required" },
  password: { type: String, required: "password is required" },
  // ARRAY OF OBJECT IDs REFERRING TO SONGS
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
  // ARRAY OF OBJECT IDs REFFERING TO PLAYLIST
  playlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Playlist",
    },
  ],
  // ARRAY OF OBJECT IDs REFFERING TO SONG

  uploads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});

userSchema.methods.generateToken = function () {
  // PAYLOAD,SECRET_KEY,OPTIONS
  const token = jwt.sign({ sub: this._id }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
  return token;
};
module.exports = mongoose.model("User", userSchema);
