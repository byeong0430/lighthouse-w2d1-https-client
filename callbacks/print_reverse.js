// require http-functions.js
let getHTML = require('../step5-http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReversed(html){
  console.log(html.split('').reverse().join(''));
}


getHTML(requestOptions, printReversed);