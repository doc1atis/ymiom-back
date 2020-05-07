const bcrypt = require("bcryptjs");
const User = require("../models/User");
module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    //   POSSIBLE DB SHUT DOWN HERE
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "user is already registered please logins",
        alreadyRegistered: true,
      });
    }

    user = new User({ username, password });
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(user.password, salt);
    //   IF THERE IS A DB SHUTDOWN
    await user.save();
    const token = user.generateToken();
    res.status(200).json({ username, success: true, token });
  } catch (error) {
    res.status(400).json({ error, success: false, isMiomDbError: true });
  }
};
