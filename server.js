// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var reservation = [
  {
    routeName: 'lolapink',
    name: 'Lola Caserola',
    phone: '123-456-7897',
    email: 'lola@gmail.com',
    uniqueID: 'lolapink',
  },
];

app.get('/', function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('reserve', function(req, res) {
  res.sendfile(path.join(__dirname, 'reserve.html'));
});

// Displays all characters
app.get('/api/:reservation?', function(req, res) {
  return res.json(reservation);
});

// Create New Reservation - takes in JSON input
app.post('/api/tables', function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation = req.body;

  console.log(newreservation);

  // We then add the json the user sent to the character array
  reservation.push(newreservation);

  // We then display the JSON to the users
  res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
