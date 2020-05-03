const mongoose = require("mongoose");
const playlistSchema = new mongoose.Schema({
  // ALL THE PROPERTIES OF THE ALBUM
  title: { type: String, required: "title is required" },
  //   AN ARRAY OF OBJECT IDs REFFERING TO SONG
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});
