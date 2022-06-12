var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('Health Check');
});

const server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
