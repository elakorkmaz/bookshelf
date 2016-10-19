var express = require('express');
var pug = require('pug');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
 console.log('Requesting home page...');
 response.send(pug.renderFile(__dirname + '/views/index.pug', {}));
 // response.sendFile(__dirname + '/index.html');
});

app.get('/books/', function(request, response) {
 console.log('Requesting home page...');
 response.send(pug.renderFile(__dirname + '/views/index.pug', {}));
 // response.sendFile(__dirname + '/index.html');
});

app.get('/harry-potter-and-the-cursed-child', function(request, response) {
 console.log('Requesting home page...');
 response.send(pug.renderFile(__dirname + '/views/books/harry-potter-and-the-cursed-child.pug', {}));
 // response.sendFile(__dirname + '/index.html');
});

app.get('/born-to-run', function(request, response) {
 console.log('Requesting home page...');
 response.send(pug.renderFile(__dirname + '/views/books/born-to-run.pug', {}));
 // response.sendFile(__dirname + '/index.html');
});

app.get('/clover-moon', function(request, response) {
 console.log('Requesting home page...');
 response.send(pug.renderFile(__dirname + '/views/books/clover-moon.pug', {}));
 // response.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
 console.log('Web server started on port 3000');
});
