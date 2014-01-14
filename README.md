# Adjuncts  

How to Install  

Prerequisites  
Node JS  
http://www.mongodb.org/downloads  
http://www.elasticsearch.org/download/  
WebStorm: http://www.jetbrains.com/webstorm/  
WebStorm MongoDB Plugin: http://plugins.jetbrains.com/plugin/7141 
WebStorm MarkDown Plugin: http://plugins.jetbrains.com/plugin/5970?pr=phpStorm  
Environment Variable: JAVA_HOME = C:\Progra~2\Java\jre7  

Download all libraries:  
npm install  
bower install  

mongod  
nodemon --debug app.js  
mongodump -h paulo.mongohq.com:10043 -d adjunct -u nader -p adj0nct -o mongodump  
mongorestore -h localhost:27017 -d adjunct mongodump/adjunct  
mongoexport -h paulo.mongohq.com:10043 -d adjunct -u nader -p adj0nct -o users.json -c users  
mongoimport -h paulo.mongohq.com:10043 -u nader -p adj0nct -d adjunct --jsonArray --collection institutions < institutions.json  
mongoimport -h localhost:27017 -d adjunct --jsonArray --collection institutions < institutions.json  
mongo  
use adjunct  
db.users.find().pretty()  

