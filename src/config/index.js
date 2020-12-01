export default {
  ISSUER: 'rocklab-identity',
  JWT_SECRET: process.env.JWT_SECRET,

  PGHOST: process.env.PGHOST || 'localhost',
  PGUSER: process.env.PGUSER || 'postgres',
  PGDATABASE: process.env.PGDATABASE || 'auth',
  PGPASSWORD: process.env.PGPASSWORD,
  PGPORT: process.env.PGPORT || 5432,
  PGURI: process.env.PGURI,
};
