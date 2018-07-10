var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));


app.use('/app', express.static('public'))
app.use('/app', express.static(path.join(__dirname, 'public')))

app.get('/api/car-details', function(req, res) {
  res.json({
    speed: 211.0,
    color: 'blue',
    model: 'Alpha Julia',
    price: 28000.0
  })
});

module.exports = app;
app.listen(3001);