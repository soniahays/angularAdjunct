var LocalStrategy = require('passport-local').Strategy,
    LinkedInStrategy = require('passport-linkedin-oauth2').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google').Strategy;

module.exports = function (db, passport, bcrypt, _) {

    var ROOT_URL = "http://localhost:3000";
    switch (process.env.NODE_ENV) {
        case 'development':
            ROOT_URL = "http://adjuncts-dev.herokuapp.com";
            break;
        case 'production':
            ROOT_URL = "http://adjuncts.herokuapp.com";
            break;
    }

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function (email, password, done) {
            email = encodeURIComponent(email);
            db.getUser({'email': email}, function (err, user) {
                if (err)
                    return done(err, null);

                if (!user) {
                    return done(null, false, { message: 'Incorrect email.' });
                }

                bcrypt.compare(password, user.password, function (err, res) {
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
            clientID: 'mw29t6wc4cfa',
            clientSecret: 'Chw82KgUKBgteXNh',
            callbackURL: ROOT_URL + '/auth/linkedin/callback',
            scope: 'r_basicprofile r_fullprofile',
            profileFields: ['id', 'first-name', 'last-name', 'summary', 'positions', 'skills', 'connections', 'shares', 'network', 'picture-urls::(original)']
        },
        function (accessToken, refreshToken, profile, done) {
            db.getUser({ 'linkedinId': profile.id }, function (err, user) {

                if (err) {
                    return done(err);
                }

                if (user) {
                    done(null, user);
                }
                else {
                    var user = {
                        'linkedinId': profile.id,
                        'firstName': profile.name.givenName,
                        'lastName': profile.name.familyName,
                        'personalSummary': profile._json.summary,
                        'expertiseTags': _.pluck(_.pluck(profile._json.skills.values, 'skill'), 'name'),
                        'linkedinPictureUrl': profile._json.pictureUrls.total > 0 ? profile._json.pictureUrls.values[0] : '',
                        'resumePositions': _.map(profile._json.positions.values, function (position) {
                            return {
                                title: position.title,
                                institution: position.company.name,
                                startMonth: position.startDate.month,
                                startYear: position.startDate.year,
                                stillHere: position.isCurrent,
                                endMonth: position.isCurrent ? null : position.endDate.month,
                                endYear: position.isCurrent ? null : position.endDate.year,
                                location: position.location,
                                description: position.summary,
                                termsDate: getUniversityTerm(position.startDate.month, position.startDate.year, position.endDate, position.isCurrent)
                            }
                        })
                    }

                    db.insertUser(user, done);
                }
            });

            function getUniversityTerm(startMonth, startYear, endDate, isStillHere) {
                var universityTermStart;
                var universityTermEnd;
                switch (startMonth) {
                    case 1:
                    case 2:
                        universityTermStart = "Winter";
                        break;
                    case 3:
                    case 4:
                    case 5:
                        universityTermStart = "Spring";
                        break;
                    case 6:
                    case 7:
                    case 8:
                        universityTermStart = "Summer";
                        break;
                    case 9 :
                    case 10 :
                    case 11 :
                    case 12 :
                        universityTermStart = "Fall";
                        break;

                }
                if (!isStillHere) {
                    switch (endDate.month) {
                        case 1:
                        case 2:
                        case 3:
                            universityTermEnd = "Winter";
                            break;
                        case 4:
                        case 5:
                        case 6:
                            universityTermEnd = "Spring";
                            break;
                        case 7:
                        case 8:
                            universityTermEnd = "Summer";
                            break;
                        case 9 :
                        case 10 :
                        case 11 :
                        case 12 :
                            universityTermEnd = "Fall";
                            break;

                    }
                }

                return isStillHere ? universityTermStart + " " + startYear + " - Present" : universityTermStart + " " + startYear + " - " + universityTermEnd + " " + endDate.year;

            }

        }
    ));

    passport.use(new FacebookStrategy({
            clientID: '573386006047842',
            clientSecret: 'dd82492ee233507c44937f3701d078b2',
            callbackURL: ROOT_URL + '/auth/facebook/callback'
        },
        function (accessToken, refreshToken, profile, done) {
            db.getUser({ 'facebookId': profile.id }, function (err, user) {
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

    passport.use(new GoogleStrategy({
            returnURL: ROOT_URL + '/auth/google/callback',
            realm: ROOT_URL
        },
        function (identifier, profile, done) {
            var googleId = encodeURIComponent(identifier);
            db.getUser({ 'googleId': googleId }, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (user) {
                    done(null, user);
                }
                else {
                    db.insertUser({ 'googleId': googleId, 'firstName': profile.name.givenName, 'lastName': profile.name.familyName }, done);
                }
            });
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, {'_id': user._id});
    });

    passport.deserializeUser(function (user, done) {
        db.getUser({'_id': user._id}, function (err, u) {
            done(null, u);
        });
    });
}