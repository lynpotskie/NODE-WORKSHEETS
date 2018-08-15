// require the express module
const express = require('express');

// then create a express server
const app = express();

// configure the default route and send a text as response
app.get('/', function(request, response) {
  response.send('Congrats you/re using your first Node.js and Express as Web Server');
});

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

const Logger = require('logplease');
const logger = Logger.create('utils');

logger.debug(`Hello Node.js`);
logger.log(`This is a log message`);
logger.info(`This HTTP server is running on port %port%`);
logger.error(`Unable to start the server on port %port%`);
