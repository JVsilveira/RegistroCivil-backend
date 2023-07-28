module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validator

  const validateFields = fields => {
    for (const field of fields) {
      if (!field.value || field.value.length === 0) {
        throw new Error(field.message)
      }
    }
  }

  const update = async (req, res) => {
    const cas = { ...req.body }
    const nomeParam = req.params.nome

    try {
      validateFields([
        { value: cas.nome, message: "Nome não informado nubente 1" },
        { value: cas.CPF, message: "CPF não informado nubente 1 " },
        {
          value: cas.natCidade,
          message: "Cidade natal não informada nubente 1",
        },
        {
          value: cas.natUf,
          message: "UF da cidade natal não informada nubente 1",
        },
        { value: cas.rua, message: "Endereço incompleto nubente 1" },
        { value: cas.num, message: "Endereço incompleto nubente 1" },
        { value: cas.bairro, message: "Endereço incompleto nubente 1" },
        { value: cas.cidade, message: "Endereço incompleto nubente 1" },
        { value: cas.uf, message: "Endereço incompleto nubente 1" },
        {
          value: cas.dataNascimento,
          message: "Data do nascimento incompleta do nubente 1 ",
        },

        {
          value: cas.solteiro,
          message: "Estado civil do nubente 1 não informado",
        },

        { value: cas.nome1, message: "Nome não informado nubente 2" },
        { value: cas.CPF1, message: "CPF não informado nubente 2" },
        {
          value: cas.natCidade1,
          message: "Cidade natal não informada nubente 2",
        },
        {
          value: cas.natUf1,
          message: "UF da cidade natal não informada nubente 2",
        },
        { value: cas.rua1, message: "Endereço incompleto nubente 2" },
        { value: cas.num1, message: "Endereço incompleto nubente 2" },
        { value: cas.bairro1, message: "Endereço incompleto nubente 2" },
        { value: cas.cidade1, message: "Endereço incompleto nubente 2" },
        { value: cas.uf1, message: "Endereço incompleto nubente 2" },
        {
          value: cas.dataNascimento1,
          message: "Data incompleta nubente 2 ",
        },
        {
          value: cas.solteiro1,
          message: "Estado civil do nubente 2 não informado",
        },

        {
          value: cas.dataCasamento,
          message: "Data do casamento não informado",
        },
        { value: cas.regimeBens, message: "Ano do casamento não informado" },
      ])

      await app
        .db("casamento")
        .where(builder => {
          builder
            .whereRaw("unaccent(nome) ILIKE ?", [`%${nomeParam}%`])
            .orWhereRaw("unaccent(nome1) ILIKE ?", [`%${nomeParam}%`])
        })
        .update({
          nome: cas.nome,
          CPF: cas.CPF,
          natCidade: cas.natCidade,
          natUf: cas.natUf,
          rua: cas.rua,
          num: cas.num,
          bairro: cas.bairro,
          cidade: cas.cidade,
          uf: cas.uf,
          dataNascimento: cas.dataNascimento,
          nomeMae: cas.nomeMae,
          nomePai: cas.nomePai,
          estadoCivil: cas.estadoCivil,
          trocaNome: cas.trocaNome,

          nome1: cas.nome1,
          CPF1: cas.CPF1,
          natCidade1: cas.natCidade1,
          natUf1: cas.natUf1,
          rua1: cas.rua1,
          num1: cas.num1,
          bairro1: cas.bairro1,
          cidade1: cas.cidade1,
          uf1: cas.uf1,
          dataNascimento1: cas.dataNascimento1,

          nomeMae1: cas.nomeMae1,
          nomePai1: cas.nomePai1,
          estadoCivil1: cas.estadoCivil1,
          trocaNome1: cas.trocaNome1,

          dataCasamento: cas.dataCasamento,
          regimeBens: cas.regimeBens,
        })
      res.status(204).send()
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }

  const insert = async (req, res) => {
    const cas = req.body

    try {
      validateFields([
        { value: cas.nome, message: "Nome não informado nubente 1" },
        { value: cas.CPF, message: "CPF não informado nubente 1 " },
        {
          value: cas.natCidade,
          message: "Cidade natal não informada nubente 1",
        },
        {
          value: cas.natUf,
          message: "UF da cidade natal não informada nubente 1",
        },
        { value: cas.rua, message: "Endereço incompleto nubente 1" },
        { value: cas.num, message: "Endereço incompleto nubente 1" },
        { value: cas.bairro, message: "Endereço incompleto nubente 1" },
        { value: cas.cidade, message: "Endereço incompleto nubente 1" },
        { value: cas.uf, message: "Endereço incompleto nubente 1" },
        {
          value: cas.dataNascimento,
          message: "Data do nascimento incompleta do nubente 1 ",
        },

        {
          value: cas.estadoCivil,
          message: "Estado civil do nubente 1 não informado",
        },

        { value: cas.nome1, message: "Nome não informado nubente 2" },
        { value: cas.CPF1, message: "CPF não informado nubente 2" },
        {
          value: cas.natCidade1,
          message: "Cidade natal não informada nubente 2",
        },
        {
          value: cas.natUf1,
          message: "UF da cidade natal não informada nubente 2",
        },
        { value: cas.rua1, message: "Endereço incompleto nubente 2" },
        { value: cas.num1, message: "Endereço incompleto nubente 2" },
        { value: cas.bairro1, message: "Endereço incompleto nubente 2" },
        { value: cas.cidade1, message: "Endereço incompleto nubente 2" },
        { value: cas.uf1, message: "Endereço incompleto nubente 2" },
        {
          value: cas.dataNascimento1,
          message: "Data incompleta nubente 2 ",
        },
        {
          value: cas.estadoCivil1,
          message: "Estado civil do nubente 2 não informado",
        },

        {
          value: cas.dataCasamento,
          message: "Data do casamento não informado",
        },
        { value: cas.regimeBens, message: "Ano do casamento não informado" },
      ])

      await app.db("casamento").insert({
        nome: cas.nome,
        CPF: cas.CPF,
        natCidade: cas.natCidade,
        natUf: cas.natUf,
        rua: cas.rua,
        num: cas.num,
        bairro: cas.bairro,
        cidade: cas.cidade,
        uf: cas.uf,
        dataNascimento: cas.dataNascimento,
        nomeMae: cas.nomeMae,
        nomePai: cas.nomePai,
        estadoCivil: cas.estadoCivil,
        trocaNome: cas.trocaNome,

        nome1: cas.nome1,
        CPF1: cas.CPF1,
        natCidade1: cas.natCidade1,
        natUf1: cas.natUf1,
        rua1: cas.rua1,
        num1: cas.num1,
        bairro1: cas.bairro1,
        cidade1: cas.cidade1,
        uf1: cas.uf1,
        dataNascimento1: cas.dataNascimento1,

        nomeMae1: cas.nomeMae1,
        nomePai1: cas.nomePai1,
        estadoCivil1: cas.estadoCivil1,
        trocaNome1: cas.trocaNome1,

        dataCasamento: cas.dataCasamento,
        regimeBens: cas.regimeBens,
      })
      res.status(204).send()
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }

  const getByName = (req, res) => {
    const nome = req.params.nome
    app
      .db("casamento")
      .where(builder => {
        builder
          .whereRaw("unaccent(nome) ILIKE ?", [`%${nome}%`])
          .orWhereRaw("unaccent(nome1) ILIKE ?", [`%${nome}%`])
      })
      .select(
        "nome",
        "CPF",
        "natCidade",
        "natUf",
        "rua",
        "num",
        "bairro",
        "cidade",
        "uf",
        "dataNascimento",
        "nomeMae",
        "nomePai",
        "estadoCivil",
        "trocaNome",
        "nome1",
        "CPF1",
        "natCidade1",
        "natUf1",
        "rua1",
        "num1",
        "bairro1",
        "cidade1",
        "uf1",
        "dataNascimento1",
        "nomeMae1",
        "nomePai1",
        "estadoCivil1",
        "trocaNome1",
        "dataCasamento",
        "regimeBens"
      )
      .then(cas => res.json(cas))
      .catch(err => res.status(500).send(err))
  }

  const remove = async (req, res) => {
    const nomeParam = req.params.nome
    const nomeParam1 = req.params.nome1

    try {
      await app
        .db("casamento")
        .where(builder => {
          builder
            .whereRaw("unaccent(nome) ILIKE ?", [`${nomeParam}`])
            .orWhereRaw("unaccent(nome1) ILIKE ?", [`${nomeParam1}`])
        })
        .del()

      res.status(204).send()
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }

  return { update, insert, getByName, remove }
}
