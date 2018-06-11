// require http-functions.js
let getHTML = require('../step5-http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printLowerCase(html){
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);