// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 5000;

// uses
app.use(express.static('server/public'));
const listings = require('./modules/routes/listings.router')

app.use(bodyParser.json());
app.use('/listings', listings);

// spin up server
app.listen(port, () => {
    console.log('server is up on: ', port);
})