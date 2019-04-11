const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');

const app = express();

// Uncomment for parcel bundled react
app.use(express.static(__dirname + '/dist/'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(port, function() {
  console.log('listening on port: ', port);
});
