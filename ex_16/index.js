const express = require('express')
const app = express()

const myMiddleware = function(req, res, next) {
    req.someValue = 'Hello World I am Here!!!!';
    
    next();
  }
  

app.use('/assets', express.static('public'));
app.use(express.static('imgs'));
app.get('/', function(request, response) {
    response.send('HELLO !!! WORLD!!!!');
    console.log('in get');
  });


app.listen(3000);