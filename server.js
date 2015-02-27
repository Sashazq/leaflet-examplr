var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http'),
    url = require('url');

app.use(express.static(path.join(__dirname, 'html'))); //  "public" off of current is root

app.listen(8080);
console.log('Listening on port 8080');