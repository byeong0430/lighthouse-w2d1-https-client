
function getAndPrintHTMLChunks(){
  const https = require('https');
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // Use GET (http verb) to send a request (requestOptions) and receive a response
  https.get(requestOptions, function (response){
    // response is a stream. Set the encoding to UTF-8
    response.setEncoding('UTF8');

    // Invoke the callback since data is available
    response.on('data', function (chunk){
      console.log('Chunk Received. Length: ', chunk.length);
      // console.log each chunk of data and concatenate with a newline character
      console.log(chunk.concat('\n'));  
    });

    // Invoke the callback when there is an error
    response.on('error', function (err){
      console.log(err.stack);
    });

    // Invoke this callback when all of the data has been received
    response.on('end', function (){
      console.log('Response stream complete.');
    });
  });
}

getAndPrintHTMLChunks();
