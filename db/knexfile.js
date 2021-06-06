// Database configuration

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME || 'loket_reservation',
      user:     process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'Technika3',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
