module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "ep-sparkling-field-44311282.us-east-2.aws.neon.tech",
      port: 5432,
      database: "neondb",
      user: "JVsilveira",
      password: "nNHupZ4sE5vM",
      ssl: true,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
}
