
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

                if (email != user.dbEmail) {
                    return done(null, false, { message: 'Incorrect email.' });
                }

                bcrypt.compare(password, user.dbPassword, function(err, res) {
                    if (!res) {
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                });

                return done(null, email);
            });
        }
    ));

    passport.use(new LinkedInStrategy({
            consumerKey: 'mw29t6wc4cfa',
            consumerSecret: 'Chw82KgUKBgteXNh',
            callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
        },
        function(token, tokenSecret, profile, done) {
            User.findOrCreate({ linkedinId: profile.id }, function (err, user) {
                return done(err, user);
            });
        }
    ));

    passport.use(new FacebookStrategy({
            clientID: '573386006047842',
            clientSecret: 'dd82492ee233507c44937f3701d078b2',
            callbackURL: "http://adjuncts-dev.herokuapp.com/auth/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            db.findOrCreate({ facebookId: profile.id }, function(err, user) {
                if (err) { return done(err); }
                done(null, user);
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