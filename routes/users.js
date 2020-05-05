const express = require("express");
const Song = require("../models/Song");
const uuid = require("uuid-random");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const authStrategy = require("../AUTH/passportConfig");
const register = require("../AUTH/register");
const login = require("../AUTH/login");
// TRY TO SEE IF ERROR OCCURS WHILE GETTING CREDENTIALS. -->EC2 is not healthy
const { accessKeyId, secretAccessKey } = AWS.config.credentials;

// REFER TO THE PRE-CREATED BUCKET
// TRY TO GET THE BUCKET INSTEAD AND LOOP OVER ALL BUCKET TO GET THE ONE YOU WANT. --> IF NOT EXIST,EC2 IS NOT HEALTHY
const BUCKET_NAME = "miom-bucket";

// CONFIGURE S3 AUTH
const s3Auth = new AWS.S3({
  accessKeyId,
  secretAccessKey,
});
// CREATE THE UPLOAD OBJECT
// serverSideEncryption: "AES256",
const upload = multer({
  storage: multerS3({
    s3: s3Auth,
    bucket: BUCKET_NAME,
    serverSideEncryption: "AES256",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      // THIS IS THE KEY OF THE FILE
      cb(null, uuid() + file.originalname);
    },
  }),
});
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

router.post("/uploads", upload.single("cover-image"), (req, res) => {
  try {
    console.log(req.file);
  } catch (error) {
    console.log("olgy Error: ", error);
  }

  // console.log(req.user);
  res.status(200).json({ olgyta: "komate" });
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
router.get("/beka/:key", (req, res) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: req.params.key,
  };

  const s3Stream = s3Auth.getObject(params).createReadStream();
  s3Stream.on("error", (err) => {
    // ERROR OCCURS TRYING TO GET THE FILE TO CREATE THE STREAM,THIS WILL RUN
    console.log("OLGYYYYYYYYYYYYYYY ERROR GETTIN FILE YEAHHHHHHHH EXPRESSSS");
    console.log("OLGY STAKKKKKKKKKK: ", err.stack);
    res.send(err);
  });

  // THIS WILL NOT RUN IF THERE IS AN ERROR GETTING THE FILE
  s3Stream.pipe(res).on("error", (err) => {
    // IF THERE IS AN ERROR STREAMING THE FILE THIS WILL RUN
    console.log("OLGY ERRORRRRRRRR PIPINGGGGGGGGG YEAHHHH MAN EXPRESSSSSS");
    res.status(400).json({ err });
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
