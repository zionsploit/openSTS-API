const sql = require('mssql')
import config from '../config';

const sqlConfig = {
    user: config.dbUser,
    password: config.dbPass,
    database: config.dbName,
    server: config.dbServer,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

const Connection = async () => {
    try {
        console.log(sqlConfig)
        const pool = await sql.connect(sqlConfig);
        return pool;
    } catch (error) {
        console.log(`Error in preceeding ${error}`)
    }
}

export { sql, Connection }