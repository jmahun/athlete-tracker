//https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs
//https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
//https://www.npmjs.com/package/dotenv

require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

module.exports = pool