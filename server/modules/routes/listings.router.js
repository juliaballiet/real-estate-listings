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

// exports
module.exports = router;