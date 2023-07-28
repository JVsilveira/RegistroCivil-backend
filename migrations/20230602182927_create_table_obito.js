exports.up = function (knex) {
  return knex.schema.createTable("obito", table => {
    table.increments("id").primary()
    table.string("nome").notNull()
    table.string("CPF").notNull().unique()
    table.string("beneficio").notNull().unique()
    table.date("dataNascimento").notNull()

    table.string("mae").notNull()
    table.string("pai").notNull()
    table.string("nomeFilhos")
    table.string("estadoCivil").notNull()
    table.date("dataObito").notNull()

    table.string("natCidade").notNull()
    table.string("natUf").notNull()
    table.string("rua").notNull()
    table.string("num").notNull()
    table.string("bairro").notNull()
    table.string("cidade").notNull()
    table.string("uf").notNull()

    table.string("ruaFalecimento").notNull()
    table.string("numFalecimento").notNull()
    table.string("bairroFalecimento").notNull()
    table.string("cidadeFalecimento").notNull()
    table.string("ufFalecimento").notNull()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("obito")
}
