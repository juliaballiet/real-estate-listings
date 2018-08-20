// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;
const listings = require('./modules/routes/listings.router')

// uses
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/listings', listings);

// spin up server
app.listen(port, () => {
    console.log('server is up on: ', port);
})