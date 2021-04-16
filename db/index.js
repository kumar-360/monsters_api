const { Pool } = require("pg");
const {
  user,
  host,
  database,
  password,
  port,
} = require("../secrets/dbConfiguration.js");

const pool = new Pool({ user, host, database, password, port });

module.exports = pool;
