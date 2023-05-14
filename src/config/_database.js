import pg from 'pg';

const client = new pg.Client({
  user: 'postgres',
  database: 'estoque',
  host: 'localhost',
  password: 'admin',
  port: 5432,
})

module.exports = client