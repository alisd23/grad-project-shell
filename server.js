
const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

// process.env.PORT is heroku's assigned port
const PORT          = process.env.PORT || 8000;
const DATABASE_NAME = 'XXXXXXXXXX';
const url           = process.env.DATABASE_URL ||
                      `mongodb://localhost:27017/${DATABASE_NAME}`;

const app = express();

/**
 *  MIDDLEWARE
 */
app.use(express.static(path.join(__dirname, 'build')));

/**
 *  ROUTES
 */
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

/**
*  START SERVER
*/
app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎 Backend server listening on port %s.', PORT);
  }
});
