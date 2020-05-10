module.exports = {
  uploadSong: (req, res) => {
    // print the uploaded file
    console.log(req.file);
    res.send("file uploaded");
  },
};
