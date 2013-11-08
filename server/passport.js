
var LocalStrategy = require('passport-local').Strategy,
    LinkedInStrategy = require('passport-linkedin').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(db, passport, bcrypt) {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
    },
        function(email, password, done) {
            db.getUser({'email': email}, function(err, user) {
                if (err)
                    return done(err,null);

                if (!user) {
                    return done(null, false, { message: 'Incorrect email.' });
                }

                bcrypt.compare(password, user.password, function(err, res) {
                    if (!res) {
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                    else {
                        return done(null, user);
                    }
                });
            });
        }
    ));

    passport.use(new LinkedInStrategy({
            consumerKey: 'mw29t6wc4cfa',
            consumerSecret: 'Chw82KgUKBgteXNh',
            callbackURL: "http://localhost:3000/auth/linkedin/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(profile);
            db.getUser({ linkedinId: profile.id }, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (user) {
                    done(null, user);
                }
                else {
                    db.insertUser({'linkedinId': profile.id, 'firstName': profile.name.givenName, 'lastName': profile.name.familyName }, done);
                }
            });
        }
    ));

    passport.use(new FacebookStrategy({
            clientID: '573386006047842',
            clientSecret: 'dd82492ee233507c44937f3701d078b2',
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(profile);
            db.getUser({ facebookId: profile.id }, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (user) {
                    done(null, user);
                }
                else {
                    db.insertUser({'facebookId': profile.id, 'firstName': profile.name.givenName, 'lastName': profile.name.familyName }, done);
                }
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        db.getUser(user, function(err, u) {
            done(null, u);
        });
    });
}