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
                'Location': 'https://www.linkedin.com/uas/oauth2/authorization?response_type=code' +
                    '&client_id=' + APIKey + '&scope=' + APIScope + '&state=RNDM_' + self.randomState(18) + '&redirect_uri=' + callbackURL
            });
            response.end();
        },

//////////////////////////////////////////////////////////////
// Oauth Step 2 - The callback post authorization
        oauthStep2: function (request, response, code, callback) {

            console.log("Step2");

            var options = {
                host: 'api.linkedin.com',
                port: 443,
                path: "/uas/oauth2/accessToken?grant_type=authorization_code&code=" + code + "&redirect_uri=" + callbackURL + "&client_id=" + APIKey + "&client_secret=" + APIKeySecret
            };

            https.get(options, function (resource) {
                console.log("in step 2 request");
                var chunks = [];
                resource.on('data', function (chunk) {
                    chunks.push(chunk);
                });
                resource.on('end', function () {
                    console.log("in step 2 end");
                    var d = chunks.join('');
                    var access_token = JSON.parse(d).access_token;
                    response.cookie('linkedinAccessToken', access_token);

                    self.oauthStep3(request, response, access_token, self.APICalls['mySkills'], function(data) {
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
    self.setAPICalls();
    return self;
}