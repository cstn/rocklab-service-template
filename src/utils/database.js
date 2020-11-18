import { Pool } from 'pg';

import config from '../config';

let pool;

function connect() {
  const options = config.PGURI ? {
    connectionString: config.PGURI,
  } : {
    user: config.PGUSER,
    host: config.PGHOST,
    database: config.PGDATABASE,
    password: config.PGPASSWORD,
    port: config.PGPORT,
  };

  pool = new Pool(options);
}

function query(sql, values) {
  if (!values) {
    return pool.query(sql);
  }

  const queryValues = Array.isArray(values) ? values : [values];

  return pool.query(sql, queryValues);
}

export {
  connect,
  query,
};
