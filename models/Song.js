const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
  // ALL THE PROPERTIES OF THE ALBUM
  title: { type: String, required: "title is required" },
  yearPublished: { type: String, required: "year is required" },
  coverImage: { type: String, required: "cover image is required" },
  numberOfLikes: { type: Number, default: 0 },
  mainArtist: { type: String, required: "artist is required" },
  // AN ARRAY OF ARTISTS NAMES
  featurings: [],
  //   AN OBJECT ID REFFERING TO AN ALBUM
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album", // THE AUTHOR CLASS
  },
});

module.exports = mongoose.model("Song", songSchema);
