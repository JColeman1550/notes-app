const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // google authentication
const User = require('../models/User');


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    
    console.log(profile)
    }
  
));

// Google login route
router.get('/auth/google',
    passport.authenticate('google', { scope: ['email','profile'] })); // get email & profile
  
  router.get('/google/callback', 
    passport.authenticate('google', { 
        failureRedirect: '/', // user redirected to homepage upon failed login
        successRedirect: '/dashboard'// user directed to dashboard upon login
    })
    );


// perserve user data after successful login
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// retrieve user data from session
passport.serializeUser(function(id, done){
    user.FindById(id, function(err, user){
        done(err, user);
    })
});
module.exports = router;