var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(2319, function () {
    console.log('Our app is listing on port 2319!');
});
