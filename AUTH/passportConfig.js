const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
// local strategy starts here
// use the username property of req.body as the usernameField
const localLogin = new LocalStrategy(
  { usernameField: "username" },
  async function (username, password, done) {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false);
      const passwordsMatched = await bcrypt.compare(password, user.password);
      if (passwordsMatched) return done(null, user);
      done(null, false);
    } catch (error) {
      done(error);
    }
  }
);
// jwt strategy starts here
const jwtOptions = {
  // TELL PASSPORT FROM WHICH HEADER TO GET THE TOKEN
  jwtFromRequest: ExtractJwt.fromHeader("authorization-x-token"),
  // USE THE SECRET KEY TO KNOW THE TOKEN IS COMING FROM YOU,AND WAS NOT MODIFIED
  secretOrKey: process.env.JWT_SECRET,
};
const jwtLogin = new JwtStrategy(jwtOptions, async function (payload, done) {
  try {
    // THAT'S HOW PASSPORT KNOWS ABOUT THE USER--->DB QUERY
    const user = await User.findById(payload.sub);
    if (user) {
      // IT ADDS THE USER AS A PROPERTY TO THE req OBJECT
      return done(null, user);
    }
    done(null, false);
  } catch (error) {
    // HANDLE DATABASE ERROR HERE
    console.log("OLgy passport error is: ", error);
    done(error, false);
  }
});
passport.use(jwtLogin);
passport.use(localLogin);

module.exports = (strategy) => {
  return passport.authenticate(strategy, { session: false });
};
