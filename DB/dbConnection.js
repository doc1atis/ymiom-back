const mongoose = require("mongoose");
module.exports = async function () {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MONGO DB Olgy--- awseb-AWSEB-1EG5ZNVG8EDM8");
  } catch (error) {
    console.log(
      "OLGY THERE WAS AN ERROR CONNECTING TO MONGODB OLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL==========OLLLLLLLLLLLLLL"
    );
  }
};
