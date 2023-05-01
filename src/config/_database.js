import pg from 'pg';

const client = new pg.Client({
  user: 'postgres',
  database: 'postgres',
  host: 'localhost',
  password: 'postgres',
  port: 5432,
})

module.exports = client