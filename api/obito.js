module.exports = app => {
  const validateFields = fields => {
    for (const field of fields) {
      if (!field.value || field.value.length === 0) {
        throw new Error(field.message)
      }
    }
  }

  const update = async (req, res) => {
    const obito = { ...req.body }
    const nomeParam = req.params.nome
    try {
      validateFields([
        { value: obito.nome, message: "Nome não informado" },
        { value: obito.CPF, message: "CPF não informado" },
        { value: obito.beneficio, message: "Benefício não informado" },
        { value: obito.mae, message: "Nome da mãe não informado" },
        { value: obito.pai, message: "Nome do pai não informado" },

        {
          value: obito.dataNascimento,
          message: "Data de nascimento não informada",
        },
        { value: obito.dataObito, message: "Data de óbito não informada" },

        { value: obito.natCidade, message: "Cidade natal não informada" },
        { value: obito.natUf, message: "UF da cidade natal não informada" },

        { value: obito.rua, message: "Endereço incompleto" },
        { value: obito.num, message: "Endereço incompleto" },
        { value: obito.bairro, message: "Endereço incompleto" },
        { value: obito.cidade, message: "Endereço incompleto" },
        { value: obito.uf, message: "Endereço incompleto" },

        { value: obito.ruaFalecimento, message: "Endereço incompleto" },
        { value: obito.numFalecimento, message: "Endereço incompleto" },
        { value: obito.bairroFalecimento, message: "Endereço incompleto" },
        { value: obito.cidadeFalecimento, message: "Endereço incompleto" },
        { value: obito.ufFalecimento, message: "Endereço incompleto" },
      ])

      await app
        .db("obito")
        .where(builder => {
          builder.whereRaw("unaccent(nome) ILIKE ?", [`%${nomeParam}%`])
        })
        .update({
          nome: obito.nome,
          CPF: obito.CPF,
          beneficio: obito.beneficio,
          mae: obito.mae,
          pai: obito.pai,
          nomeFilhos: obito.nomeFilhos,
          estadoCivil: obito.estadoCivil,

          dataNascimento: obito.dataNascimento,

          dataObito: obito.dataObito,

          natCidade: obito.natCidade,
          natUf: obito.natUf,
          rua: obito.rua,
          num: obito.num,
          bairro: obito.bairro,
          cidade: obito.cidade,
          uf: obito.uf,

          ruaFalecimento: obito.ruaFalecimento,
          numFalecimento: obito.numFalecimento,
          bairroFalecimento: obito.bairroFalecimento,
          cidadeFalecimento: obito.cidadeFalecimento,
          ufFalecimento: obito.ufFalecimento,
        })

      res.status(204).send()
    } catch (error) {
      return res.status(500).send({ message: error.message })
    }
  }

  const insert = async (req, res) => {
    const obito = req.body

    try {
      validateFields([
        { value: obito.nome, message: "Nome não informado" },
        { value: obito.CPF, message: "CPF não informado" },
        { value: obito.beneficio, message: "Benefício não informado" },
        { value: obito.mae, message: "Nome da mãe não informado" },
        { value: obito.pai, message: "Nome do pai não informado" },

        {
          value: obito.dataNascimento,
          message: "Data de nascimento não informada",
        },
        { value: obito.dataObito, message: "Data de óbito não informada" },

        { value: obito.natCidade, message: "Cidade natal não informada" },
        { value: obito.natUf, message: "UF da cidade natal não informada" },

        { value: obito.rua, message: "Endereço incompleto" },
        { value: obito.num, message: "Endereço incompleto" },
        { value: obito.bairro, message: "Endereço incompleto" },
        { value: obito.cidade, message: "Endereço incompleto" },
        { value: obito.uf, message: "Endereço incompleto" },

        { value: obito.ruaFalecimento, message: "Endereço incompleto" },
        { value: obito.numFalecimento, message: "Endereço incompleto" },
        { value: obito.bairroFalecimento, message: "Endereço incompleto" },
        { value: obito.cidadeFalecimento, message: "Endereço incompleto" },
        { value: obito.ufFalecimento, message: "Endereço incompleto" },
      ])

      await app.db("obito").insert({
        nome: obito.nome,
        CPF: obito.CPF,
        beneficio: obito.beneficio,
        mae: obito.mae,
        pai: obito.pai,
        nomeFilhos: obito.nomeFilhos,
        estadoCivil: obito.estadoCivil,

        dataNascimento: obito.dataNascimento,

        dataObito: obito.dataObito,

        natCidade: obito.natCidade,
        natUf: obito.natUf,
        rua: obito.rua,
        num: obito.num,
        bairro: obito.bairro,
        cidade: obito.cidade,
        uf: obito.uf,

        ruaFalecimento: obito.ruaFalecimento,
        numFalecimento: obito.numFalecimento,
        bairroFalecimento: obito.bairroFalecimento,
        cidadeFalecimento: obito.cidadeFalecimento,
        ufFalecimento: obito.ufFalecimento,
      })
      res.status(204).send()
    } catch (error) {
      return res.status(500).send({ message: error.message })
    }
  }

  const getByName = (req, res) => {
    const nome = req.params.nome
    app
      .db("obito")
      .select(
        "nome",
        "CPF",
        "beneficio",
        "mae",
        "pai",
        "nomeFilhos",
        "estadoCivil",

        "dataNascimento",

        "dataObito",

        "natCidade",
        "natUf",
        "rua",
        "num",
        "bairro",
        "cidade",
        "uf",

        "ruaFalecimento",
        "numFalecimento",
        "bairroFalecimento",
        "cidadeFalecimento",
        "ufFalecimento"
      )
      .where(builder => {
        builder.whereRaw("unaccent(nome) ILIKE ?", [`%${nome}%`])
      })
      .select()
      .then(obito => res.json(obito))
      .catch(err => res.status(500).send(err))
  }

  const remove = async (req, res) => {
    const nomeParam = req.params.nome
    const CPF = req.params.CPF
    try {
      await app

        .db("obito")
        .where(builder => {
          builder.whereRaw("unaccent(nome) ILIKE ?", [`${nomeParam}`])
        })
        .del()

      res.status(204).send()
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }

  return { update, insert, getByName, remove }
}
