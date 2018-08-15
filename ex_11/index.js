
const express = require('express');
const port = 3000;


const app = express();

  app.get('/products', function(req, res) {
    res.send('On this call we show a list of products');
  });
  