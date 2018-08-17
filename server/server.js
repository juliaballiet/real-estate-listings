// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const listings = require('./modules/routes/listings.router')
const port = 5000;

// uses
app.use(express.static('server/public'));
app.use('listings', listings)
app.use(bodyParser.json());

// spin up server
app.listen(port, () => {
    console.log('server is up on: ', port);
})