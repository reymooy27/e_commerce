
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./model/user');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
  User.findById(id)
  .then(user => {
    done(null, user);
  })
  .catch(e => {
    done(new Error("Failed to deserialize an user"));
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
    async (token, tokenSecret, profile, done) => {
      const currentUser = await User.findOne({
        googleId: profile.id
      });

      if (!currentUser) {
        const newUser = await new User({
          username: profile._json.name,
          email: profile._json.email,
          googleId: profile._json.sub,
          profilePicture: profile._json.picture
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      
      done(null, currentUser);
    }
  )
);