# Adjuncts  

How to Install  
Prerequisites
Node JS  
http://www.mongodb.org/downloads  
http://www.elasticsearch.org/download/  
WebStorm: http://www.jetbrains.com/webstorm/  
WebStorm MongoDB Plugin: http://plugins.jetbrains.com/plugin/7141 
WebStorm MarkDown Plugin: http://plugins.jetbrains.com/plugin/5970?pr=phpStorm
WebStorm + Nodemon: Run -> Edit Configurations -> JavaScript File -> C:\Users\Nader\AppData\Roaming\npm\node_modules\nodemon\bin\nodemon.js. Application Parameters: app.js
mongod  
nodemon --debug app.js  
mongodump -h paulo.mongohq.com:10043 -d adjunct -u nader -p adj0nct -o mongodump  
mongorestore -h localhost:27017 -d adjunct mongodump/adjunct
mongoimport -h paulo.mongohq.com:10043 -u nader -p adj0nct -d adjunct --jsonArray --collection institutions < institutions.json
mongoexport -h paulo.mongohq.com:10043 -d ` -u nader -p adj0nct -o institutions.json -c institutions
mongoimport -h localhost:27017 -d adjunct --jsonArray --collection institutions < institutions.json  
mongo  
use adjunct  
db.users.find().pretty()  
to deploy to heroku:  
git push heroku master  

