// require http-functions.js
let getHTML = require('../step5-http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReversed(html){
  // Find HTML tag lines
  const regExp = /<([^>]+)>/gi;
  // Loop through each html line
  html.split('\n').forEach(line => {
    (line.match(regExp) === null) ? console.log(line.split('').reverse().join('')) : console.log(line);
  });
}


getHTML(requestOptions, printReversed);