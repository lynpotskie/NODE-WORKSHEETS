const express = require('express');
const app = express();

const myMiddleware = function(req, res, next) {
  req.someValue = 'Hello World I am Here!!!!';
  
  next();
}

app.use(myMiddleware);

app.get('/', (req, res) => {
  const responseMessage = req.someValue; // We get the request value that we setted from the middleware
  
  res.send(responseMessage);
});

app.listen(3000);
console.log('Request 1506002876731');