// require http-functions.js
let getHTML = require('../step5-http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function print1337(html){
  const substituteDict = {
    a: '4',
    e: '3',
    l: '1',
    o: '0',
    s: '5',
    t: '7',
    ck: 'x',
    er: '0r',
    you: 'j00'
  };
  let regExp = /you|er|ck|t|s|o|l|e|a/g;

  // In the anynomous function, matchFoundInRegExp refers to whatever segment that's matched with the regex expression
  // console.log(matchFoundInRegExp) will print out any of the 9 options given in regExp
  let result = html.replace(regExp, function(matchFoundInRegExp){
    return substituteDict[matchFoundInRegExp];
  });

  console.log(result);
}

getHTML(requestOptions, print1337);