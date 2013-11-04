
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(db, passport, bcrypt) {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
    },
        function(email, password, done) {
            db.getUser(email, function(dbEmail, dbPassword) {
                if (email != dbEmail) {
                    return done(null, false, { message: 'Incorrect email.' });
                }

                bcrypt.compare(password, dbPassword, function(err, res) {
                    if (!res) {
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                });

                return done(null, email);
            });
        }
    ));

    passport.serializeUser(function(email, done) {
        done(null, email);
    });

    passport.deserializeUser(function(email, done) {
        db.getUser(email, function(dbEmail, dbPassword) {
            done(null, dbEmail);
        });
    });
}