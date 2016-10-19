var express = require('express');
var pug = require('pug');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
 console.log('Requesting home page...');
 response.send(pug.renderFile(__dirname + '/index.pug', {}));
 // response.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
 console.log('Web server started on port 3000');
});
