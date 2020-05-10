const uuid = require("uuid-random");
const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const BUCKET_NAME = "miom-bucket";
// CONFIGURE S3 AUTH
const s3Auth = new AWS.S3({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key,
  httpOptions: { timeout: 900000 },
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
      cb(null, `/song/${uuid()}/${file.originalname}`);
    },
  }),
});

module.exports = upload;
