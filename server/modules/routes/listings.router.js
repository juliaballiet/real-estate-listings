// requires
const express = require('express');
const router = express.Router();
const pg = require('pg');

// sql
const Pool = pg.Pool;
const config = {
    database: 'real_estate',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
}
const pool = new Pool(config);
pool.on('connect', () => {
    console.log('postgresql connected');
});
pool.on('error', (error) => {
    console.log('error: ', error);
});

// routes
router.post('/', (req, res) => {
    console.log(req.body);
    const newListing = req.body;
    const query = `INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path")
                    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(query, [newListing.cost, newListing.sqft, newListing.type, 
                newListing.city, newListing.image_path]).then(() => {
                    res.sendStatus(201);
                }).catch((error) => {
                    console.log('error: ', error);
                    res.sendStatus(500);
                })
})

// exports
module.exports = router;