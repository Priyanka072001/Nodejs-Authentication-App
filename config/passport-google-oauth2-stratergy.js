const passport = require('passport');
const googleStratergy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

//USE passport to use new stratergy for google signin/up
passport.use(new googleStratergy({
        clientID:  '905609452707-ftcgmvrbh32kas8of6a8tjvc0suuqanv.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: "http://localhost:8000/users/auth/google/callback"
    },

    function(accessToken, refreshToken, profile, done){
        //find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err,user){
            if(err){console.log('error in google stratergy-passport',err); return}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if(user){
                //if found, set this user 
                return done(null, user);
            }else{
                //if not found, create the user 
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function(err,user){
                    if(err){console.log('error in creating user google stratergy-passport',err); return}

                    return done(null, user);
                });
            }
        })
    }
));


module.exports = passport;