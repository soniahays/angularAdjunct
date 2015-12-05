module.exports = function (http, https) {

    var APIKey = "mw29t6wc4cfa";
    var APIKeySecret = "Chw82KgUKBgteXNh";
    var callbackURL = "/api/linkedInAuthCallback";
    var APIVersion = "v1";
    var APIScope = 'r_basicprofile';

    var self = {
        randomState: function (howLong) {

            howLong = parseInt(howLong);

            if (!howLong || howLong <= 0) {
                howLong = 18;
            }
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";

            for (var i = 0; i < howLong; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        },

//////////////////////////////////////////////////////////////
// Oauth Step 1 - Redirect end-user for authorization
        oauthStep1: function (req, response) {
            console.log("Step1");
            response.writeHead(302, {
                'Location': 'https://www.linkedin.com/uas/oauth2/authorization?response_type=code' +
                    '&client_id=' + APIKey + '&scope=' + APIScope + '&state=RNDM_' + self.randomState(18) + '&redirect_uri=' +  "http://" + req.headers.host + callbackURL
            });
            response.end();
        },

//////////////////////////////////////////////////////////////
// Oauth Step 2 - The callback post authorization
        oauthStep2: function (request, response, code, APICall, callback) {

            console.log("Step2");

            var options = {
                host: 'api.linkedin.com',
                port: 443,
                path: "/uas/oauth2/accessToken?grant_type=authorization_code&code=" + code + "&redirect_uri=" + "http://" + request.headers.host + callbackURL + "&client_id=" + APIKey + "&client_secret=" + APIKeySecret
            };

            https.get(options, function (resource) {
                var chunks = [];
                resource.on('data', function (chunk) {
                    chunks.push(chunk);
                });
                resource.on('end', function () {
                    var d = chunks.join('');
                    var access_token = JSON.parse(d).access_token;
                    response.cookie('linkedinAccessToken', access_token);

                    self.oauthStep3(request, response, access_token, APICall, function(data) {
                        callback(data);
                    });
                });
            }).on('error', function (e) {
                console.error("There was an error with our Oauth Call in Step 2: " + e);
                response.end("There was an error with our Oauth Call in Step 2");
            });
        },

//////////////////////////////////////////////////////////////
// Oauth Step 3 - Now you can make a real API call
// Get some real LinkedIn data below
        oauthStep3: function (request, response, access_token, APICall, callback) {

            console.log("Step3");
            var JSONformat = APICall.indexOf("?") >= 0 ? "&format=json" : "?format=json";

            var options = {
                host: 'api.linkedin.com',
                port: 443,
                path: '/' + APIVersion + '/' + APICall + JSONformat + "&oauth2_access_token=" + access_token
            };

            https.get(options, function (resource) {
                var chunks = [];
                resource.on('data', function (chunk) {
                    chunks.push(chunk);
                });
                resource.on('end', function () {
                    var data = chunks.join('');
                    callback(data);
                });
            }).on('error', function (e) {
                console.error("There was an error with our LinkedIn API Call in Step 3: " + e);
                response.end("There was an error with our LinkedIn API Call in Step 3");
            });
        }
    }
    return self;
}