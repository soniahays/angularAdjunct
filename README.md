# Adjuncts

How to Install

npm install
bower install
mongod
nodemon --debug app.js
mongodump -h paulo.mongohq.com:10043 -d adjunct -u nader -p adj0nct -o mongodump
mongorestore -h localhost:27017 -d adjunct mongodump/adjunct
mongo
use adjunct
db.users.find().pretty()