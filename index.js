var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var http = require('http').Server(app);

app.use('/', express.static(__dirname + '/public'));

//app.use(express.static(path.join(__dirname, 'public/angular/app')));

app.use(bodyParser());

var port = process.env.PORT || 3000;

var host = process.env.HOST || "127.0.0.1";

app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});

//app.listen(3000);

app.listen(port, host, function(){
  console.log("Server listening to %s:%d within %s environment",
              host, port, app.get('env'));
  //console.log('listening on', http.address().port);
});