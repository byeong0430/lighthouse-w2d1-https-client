function getHTML(options, callback){
  // Require a built-in module called https
  const https = require('https');
  let htmlResult = '';

  // Use GET (http verb) to send a request (options) and receive a response
  https.get(options, function (response){
    // response is a stream. Set the encoding to UTF-8
    response.setEncoding('UTF8');

    // Invoke the callback since data is available
    response.on('data', function (chunk){
      console.log('Chunk Received. Length: ', chunk.length);
      // console.log each chunk of data and concatenate with a newline character
      htmlResult += chunk;  
    });

    // Invoke the callback when there is an error
    response.on('error', function (err){
      console.log(err.stack);
    });

    // Invoke this callback when all of the data has been received
    response.on('end', function (){
      console.log('Response stream complete.');
      callback(htmlResult);
    });
  });
}

function printHTML(html){
  console.log(html);
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
