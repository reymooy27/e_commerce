const router = require('express').Router()
const passport = require('passport')

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/login/failed' , successRedirect: 'http://localhost:3000'})
);

router.get("/auth/login/success", (req, res) => {
  if (req.user && req.session.passport) {
    console.log(req.session.passport)
    console.log(req.user)
    res.status(200).json({
      user: req.user,
    });
  }
});

router.get("/auth/login/failed", (req, res) => {
  res.status(401).json("User failed to authenticate");
});

router.get("/auth/logout", (req, res) => {
  req.logout();
  console.log(req.session)
  console.log(req.user)
  res.status(200).redirect('http://localhost:3000');
});

module.exports = router