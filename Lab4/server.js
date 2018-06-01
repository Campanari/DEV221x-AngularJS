var express = require('express');

var app = express();

app.use('/angular', express.static('node_modules/angular'));
app.use('/bootstrap', express.static('node_modules/bootstrap'));

app.use(express.static(__dirname + '/'));

app.listen(2319, function () {
    console.log('Our app is listing on port 2319!');
});
