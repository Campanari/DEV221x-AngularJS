var express = require('express');
var app = express();

app.use(express.static('public'));

app.use('/angular', express.static('node_modules/angular'));
app.use('/angular-route', express.static('node_modules/angular-route'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/jquery', express.static('node_modules/jquery/dist'));

app.use(function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(2319, function () {
    console.log('Our app is listening on port 2319!');
});