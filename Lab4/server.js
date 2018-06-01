var express = require('express');

var app = express();

//app.use(express.static('node_modules'));

app.use(express.static(__dirname + '/'));

app.listen(2319, function () {
    console.log('Our app is listing on port 2319!');
});ß
