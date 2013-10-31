
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(db, passport) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            db.get(function(dbUsername, dbPassword) {
                if (username != dbUsername) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (password != dbPassword) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, username );
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        db.get(function(dbUsername, dbPassword) {
            done(null, dbUsername);
        });
    });
}