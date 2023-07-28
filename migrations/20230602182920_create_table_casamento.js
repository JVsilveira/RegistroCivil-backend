exports.up = function (knex) {
  return knex.schema.createTable("casamento", table => {
    table.increments("id").primary()
    table.string("nome").notNull()
    table.string("CPF").notNull().unique()
    table.string("natCidade").notNull()
    table.string("natUf").notNull()
    table.string("rua").notNull()
    table.string("num").notNull()
    table.string("bairro").notNull()
    table.string("cidade").notNull()
    table.string("uf").notNull()
    table.date("dataNascimento").notNull()
    table.string("nomeMae")
    table.string("nomePai")
    table.string("estadoCivil").notNull()
    table.string("trocaNome")

    table.string("nome1").notNull()
    table.string("CPF1").notNull().unique()
    table.string("natCidade1").notNull()
    table.string("natUf1").notNull()
    table.string("rua1").notNull()
    table.string("num1").notNull()
    table.string("bairro1").notNull()
    table.string("cidade1").notNull()
    table.string("uf1").notNull()
    table.date("dataNascimento1").notNull()

    table.string("nomeMae1")
    table.string("nomePai1")
    table.string("estadoCivil1").notNull()
    table.string("trocaNome1")

    table.date("dataCasamento").notNull()

    table.string("regimeBens").notNull()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("casamento")
}
