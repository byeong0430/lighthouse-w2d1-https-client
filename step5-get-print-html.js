// require('https'); doesn't need to be declared in this file because https module is privately available within step5-http-functions.js for getHTML() function 
let getHTML = require('./step5-http-functions');

function printHTML(html){
  console.log(html);
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(https, requestOptions, printHTML);

