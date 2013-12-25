module.exports = function (http, https) {

    var APIKey = "mw29t6wc4cfa";
    var APIKeySecret = "Chw82KgUKBgteXNh";
    var callbackURL = "http://localhost:3000/api/linkedInAuthCallback";
    var APIVersion = "v1";

    // These are all of the scope variables. Remove them based on your needs
    var APIScope = 'r_fullprofile r_emailaddress r_network r_contactinfo';

    var self = {
        APICalls: [],

        setAPICalls: function() {
// My Profile and My Data APIs
            self.APICalls['mySkills'] = 'people/~:(skills)';
            self.APICalls['myProfile'] = 'people/~:(first-name,last-name,headline,picture-url)';
            self.APICalls['myConnections'] = 'people/~/connections';
            self.APICalls['myNetworkShares'] = 'people/~/shares';
            self.APICalls['myNetworksUpdates'] = 'people/~/network/updates';
            self.APICalls['myNetworkUpdates'] = 'people/~/network/updates?scope=self';

// PEOPLE SEARCH APIS
// Be sure to change the keywords or facets accordingly
            self.APICalls['peopleSearchWithKeywords'] = 'people-search:(people:(id,first-name,last-name,picture-url,headline),num-results,facets)?keywords=Hacker+in+Residence';
            self.APICalls['peopleSearchWithFacets'] = 'people-search:(people,facets)?facet=location,us:84';

// GROUPS APIS
// Be sure to change the GroupId accordingly
            self.APICalls['myGroups'] = 'people/~/group-memberships?membership-state=member';
            self.APICalls['groupSuggestions'] = 'people/~/suggestions/groups';
            self.APICalls['groupPosts'] = 'groups/12345/posts:(title,summary,creator)?order=recency';
            self.APICalls['groupDetails'] = 'groups/12345:(id,name,short-description,description,posts)';

// COMPANY APIS
// Be sure to change the CompanyId or facets accordingly
            self.APICalls['myFollowingCompanies'] = 'people/~/following/companies';
            self.APICalls['myFollowCompanySuggestions'] = 'people/~/suggestions/to-follow/companies';
            self.APICalls['companyDetails'] = 'companies/1337:(id,name,description,industry,logo-url)';
            self.APICalls['companySearch'] = 'company-search:(companies,facets)?facet=location,us:84';

// JOBS APIS
// Be sure to change the JobId or facets accordingly
            self.APICalls['myJobSuggestions'] = 'people/~/suggestions/job-suggestions';
            self.APICalls['myJobBookmarks'] = 'people/~/job-bookmarks';
            self.APICalls['jobDetails'] = 'jobs/1452577:(id,company:(name),position:(title))';
            self.APICalls['jobSearch'] = 'job-search:(jobs,facets)?facet=location,us:84';
        },
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
                'Location': 'https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=' + APIKey + '&scope=' + APIScope + '&state=RNDM_' + self.randomState(18) + '&redirect_uri=' + callbackURL
            });
            response.end();
        },

//////////////////////////////////////////////////////////////
// Oauth Step 2 - The callback post authorization
        oauthStep2: function (request, response, code) {

            console.log("Step2");

            var options = {
                host: 'api.linkedin.com',
                port: 443,
                path: "/uas/oauth2/accessToken?grant_type=authorization_code&code=" + code + "&redirect_uri=" + callbackURL + "&client_id=" + APIKey + "&client_secret=" + APIKeySecret
            };

            var req = https.request(options, function (res) {
                console.log("statusCode: ", res.statusCode);
                console.log("headers: ", res.headers);

                res.on('data', function (d) {
                    // STEP 3 - Get LinkedIn API Data
                    // We have successfully completed Oauth and have received our access_token.  Congrats!
                    // Now let's make a real API call (Example API call referencing APICalls['peopleSearchWithKeywords'] below)
                    // See more example API Calls at the end of this file
                    console.log("d: ", d);
                    access_token = JSON.parse(d).access_token;

                    var ExpiresIn29days = new Date();
                    ExpiresIn29days.setDate(ExpiresIn29days.getDate() + 29);

                    response.writeHead(200, {
                        'Set-Cookie': 'linkedInAccessToken=' + access_token + '; Expires=' + ExpiresIn29days
                    });

                    self.oauthStep3(request, response, access_token, APICalls['peopleSearchWithKeywords']);
                });
            });

            req.on('error', function (e) {
                console.error("There was an error with our Oauth Call in Step 2: " + e);
                response.end("There was an error with our Oauth Call in Step 2");
            });
            req.end();
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

            var req = https.request(options, function (res) {
                res.on('data', function (d) {
                    // We have LinkedIn data!  Process it and continue with your application here
                    callback(d);
                });
            });

            req.on('error', function (e) {
                console.error("There was an error with our LinkedIn API Call in Step 3: " + e);
                response.end("There was an error with our LinkedIn API Call in Step 3");
            });
            req.end();
        }
    }
    self.setAPICalls();
    return self;
}