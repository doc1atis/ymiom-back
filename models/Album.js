const mongoose = require("mongoose");
const albumSchema = new mongoose.Schema({
  // ALL THE PROPERTIES OF THE ALBUM
  title: { type: String, required: "title is required" },
  yearPublished: { type: String, required: "year is required" },
  coverImageLink: { type: String, required: "cover image is required" },
  // AN ARRAY OF SONGS OBJECTS IDs
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
  mainArtist: { type: String, required: "artist is required" },
  //   AN ARRAY OF ARTISTs
  featurings: [],
});
