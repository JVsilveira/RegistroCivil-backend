module.exports = {
  client: "postgresql",
  connection: {
    host: "registro-civil-backend.vercel.app",
    port: 5432,
    database: "neondb",
    user: "JVsilveira",
    password: "nNHupZ4sE5vM",
    ssl: true,
  },
  migrations: {
    tableName: "knex_migrations",
  },
}
