const { Pool } = require('pg');
require("dotenv").config();

// Retrive the values of the database properties
const HT= process.env.HOST;
const HTPO=process.env.HOST_PORT;
const HTU=process.env.HOST_USER;
const HTPA=process.env.HOST_PASS;
const HTDB=process.env.HOST_DB;

const pool = new Pool({
    user: HTU,
    host: HT,
    database: HTDB,
    password: HTPA,
    port: HTPO,
});

module.exports = pool;