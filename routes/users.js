const express = require("express");
const FileType = require("file-type");
const authStrategy = require("../AUTH/passportConfig");
const register = require("../AUTH/register");
const login = require("../AUTH/login");

/* GET users listing. */
const router = express.Router();
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/register", register);
router.post("/login", authStrategy("local"), login);
router.get("/uploads", (req, res) => {
  res.status(200).json({ olgy: "koma" });
});

router.post("/test", async (req, res) => {
  console.log(req.body);
  try {
    let song = new Song(req.body);
    song = await song.save();
    res.json(song);
  } catch (error) {
    res.status(400).json({ error });
  }
});
router.post("/up", async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(
      "5eb048f49a87d44919fb9059",
      { $set: { album: "5eb04bc5da432149a7e24467", yearPublishe: "3009" } },
      { new: true, useFindAndModify: false }
    );
    res.json(song);
  } catch (error) {
    res.status(400).json(error);
  }
});
// jfvfhbfkbfbfjfbhkfbfjbhjfbjfjbvfkbkfbvfbfjvfkvvdvkdvdvdmbvdvnbdnmvndmvnmdnvmdnmvdmvmdvdmvdmvdmvd
router.get("/sound/:key", (req, res) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: req.params.key,
  };
  const stream = s3Auth.getObject(params).createReadStream();
  stream.on("error", (err) => {
    stream.end();
    console.log(err);
  });
  res.set({
    "Content-Type": "audio/mpeg",
    // ETag: "d0223dc146c5eb5a345a8aabc0bf7272",
    "Accept-Ranges": "bytes",
  });
  stream
    .pipe(res)
    .on("error", (err) => {
      console.log("error piping");
    })
    .on("close", () => {
      console.log("done olgy");
      res.end();
    });
});
router.get("/image/:key", (req, res) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: req.params.key,
  };
  s3Auth.getObject(params, (err, data) => {
    if (err) {
      console.log(err.stack);
      res.json({ getting: "olgybuk" });
    } else {
      res.set({
        "Content-Type": data.ContentType,
        ETag: data.ETag,
        "Content-Length": data.ContentLength,
        "Accept-Ranges": data.AcceptRanges,
        Metadata: data.Metadata,
      });
      res.write(data.Body);
      res.end();
    }
  });
});
// best approach, embed all song inside of and album

/**
 *singles
 -----------------------------
 title:"makina"
 mainArtist:"olgy"
 type:single
 songs:[{title:"makina",artist:"olgy"}] --->single album

 albums
-----------------------
 tile:"dope"
 mainArtist:"djo"
 type:multi
 songs:[{title:"makina",artist:"olgy"},{tile:"dela"}] ---> multi album, empty first, then update to add songs

 */

/**
 *
 *
 * 1 save the song in Song collection, it will refer to it's album OR NOTHING
 * 2 get the saved song id ---> skip for single
 * 3 update the album by adding the saved song id in the album's songs property --> skip for single
 *
 * WE WILL QUERY THE SONG COLLECTION ONLY
 *  SONG MODEL
 * mainartist:"olgy"
 * albumname: albumname or tile
 * soundUrl:"hdhsfdf"
 * coverImageUrl:"vfgfgfgfg"
 * album:empty or a reference
 *
 * /users/upload/single  ----> upload a single
 * /users/single/delete ---> delete a single
 * /users/singles/delete ---> delete multiple singles
 * /users/create/album  ---> create an album
 * /users/album/add-song ----> add a song into a already-created album
 * /users/album/delete-song/:songid ---> delete a song from an album
 * /users/album/delete-songs  ---> delete multiple songs in an  album
 * /users/albums ----> get all albums
 * /users/singles ----> get all singles
 *
 */
module.exports = router;
