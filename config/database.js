require("dotenv").config();

const {DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT} = process.env;

module.exports = {
    development: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres",
        ssl: true,
    },
    test: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres",
        ssl: true,
    },
    production: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres",
        ssl: true,
    },
};
