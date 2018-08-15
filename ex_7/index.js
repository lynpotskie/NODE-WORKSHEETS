const express = require('express')
console.log(express);

const greeter = require('./greeter');
const greet = getGreet('lyn fuster');

function getGreet() {
    return 'We are using node modules yeah!!!';
  }
  
  const getGreetArrowFunction = () => 'We are using node modules yeah!!!';
  const message = getGreetArrowFunction();
  exports = getGreet;
  