require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const userRepository = require("../repository/UserRepo");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
 async (accessToken, refreshToken, profile, done) => {
  const newUser = {
    googleId: profile.id, 
    username: profile.displayName,
    email: profile.emails[0].value,
    profileImage: profile.photos[0].value,
    role: "Client",
  };

  try {
    let user = await userRepository.findUserById(profile.id); 
    if (user) {
      return done(null, user);
    } else {
      const createdUser = await userRepository.createUser(newUser);
      return done(null, createdUser);
    }
  } catch (error) {
    return done(error, null);
  }
}
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userRepository.findUserById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
