var express = require('express');
var pug = require('pug');
var app = express();

var dataInMemory = [];
dataInMemory.push({
  title: 'Harry Potter & the Cursed Child',
  slug: 'harry-potter-and-the-cursed-child',
  imageUrl: '../img/harrypotter.jpg',
  authorName: 'J.K. Rowling',
  description: "A full nineteen years has passed since the climactic finale of Harry Potter and the Deathly Hallows. Voldemort is a shadow of the past; Harry Potter himself is now a burdened employee at the Ministry of Magic, the wizarding triumphs of his youth seemingly shelved for the demands of family life. Once again, the vaulting arches of Kings Cross become the gateway to wild adventure as young Albus Severus Potter – Harry’s now second son – boards a waiting Hogwarts Express, prepared to fulfil his own destinies.",
  numberOfPages: '352'
});
dataInMemory.push({
  title: 'Born to Run',
  slug: 'born-to-run',
  imageUrl: '../img/borntorun.jpg',
  authorName: 'Bruce Springsteen',
  description: " In 2009, Bruce Springsteen and the E Street Band performed at the Super Bowl’s halftime show. The experience was so exhilarating that Bruce decided to write about it. That’s how this extraordinary autobiography began. Over the past seven years, Bruce Springsteen has privately devoted himself to writing the story of his life, bringing to these pages the same honesty, humour and originality found in his songs.",
  numberOfPages: '528'
});
dataInMemory.push({
  title: 'Clover Moon',
  slug: 'clover-moon',
  imageUrl: '../img/clovermoon.jpg',
  authorName: 'Jacqueline Wilson',
  description: "Clover Moon’s imagination is her best escape from a life of hardship in poverty-stricken Victorian London. When tragedy plunges her into a world of grief, Clover realizes that everything she loved about the place she called home is gone. Clover hears of a place she could run to, but where will she find the courage – and the chance – to break free? And could leaving her family be just what she needs to find a place that really feels like home?",
  numberOfPages: '400'
});

function findBook(slug) {
  // iterate through the array as soon as ('books/' + slug) is the permalink
  // of the book in the loop return the book
  for (var i = 0; i < dataInMemory.length; i++) {
    if (dataInMemory[i].slug === slug) {
      return dataInMemory[i];
    }
  }
}

// lets us access files inside the public folder via http:
app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  response.redirect('/books');
});

app.get('/books', function(req, res) {
  console.log('Requesting /books');
  res.send(pug.renderFile('views/index.pug', { books: dataInMemory }));
});

app.get('/books/*', function(req, res) {
  var foundBook = findBook(req.params[0]);
  res.send(pug.renderFile('views/book.pug', { book: foundBook }));
});

app.listen(3001, function() {
  console.log('Web server is now running on port 3001');
});
