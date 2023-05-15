import pg from 'pg';

const DB_USER = process.env.DB_USER;
const DB_SERVER = process.env.DB_SERVER;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const client = new pg.Client({
  user: DB_USER,
  database: DB_NAME,
  host: DB_SERVER,
  password: DB_PASSWORD,
  port: 5432,
})

module.exports = client