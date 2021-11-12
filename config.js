require('dotenv/config');

module.exports = {
    //http
    PORT: 5500,
    //DATABASE
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    dbServer: process.env.DB_SERVER
}