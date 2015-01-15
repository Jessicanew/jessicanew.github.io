var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use('/', express.static(__dirname + '/public'));

//app.use(express.static(path.join(__dirname, 'public/angular/app')));

app.use(bodyParser());


app.listen(3000);