var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. THis is Rakesh thanks for watching '); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000
