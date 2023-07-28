module.exports = {
  client: 'postgresql',
  connection: {
    database: 'RegistroCivil',
    user: 'postgres',
    password: '3100',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
}
