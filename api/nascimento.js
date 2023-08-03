module.exports = app => {
  const validateFields = fields => {
    for (const field of fields) {
      if (!field.value || field.value.length === 0) {
        throw new Error(field.message)
      }
    }
  }

  const update = async (req, res) => {
    const nasc = { ...req.body }
    const nomeParam = req.params.nome

    try {
      validateFields([
        { value: nasc.nome, message: "Nome não informado" },
        { value: nasc.CPF, message: "CPF não informado" },
        { value: nasc.natCidade, message: "Cidade natal não informada" },
        { value: nasc.natUf, message: "UF da cidade natal não informada" },
        { value: nasc.rua, message: "Endereço incompleto" },
        { value: nasc.num, message: "Endereço incompleto" },
        { value: nasc.bairro, message: "Endereço incompleto" },
        { value: nasc.cidade, message: "Endereço incompleto" },
        { value: nasc.uf, message: "Data incompleta" },
        { value: nasc.dataNascimento, message: "Data incompleta" },
        { value: nasc.hora, message: "Data incompleta" },
        { value: nasc.nomeMae, message: "Nome da mãe não informado" },
        { value: nasc.maeMae, message: "Nome do avó materna não informado" },
        { value: nasc.paiMae, message: "Nome do avô materno não informado" },
        { value: nasc.ruaMae, message: "Endereço da mãe incompleto" },
        { value: nasc.numMae, message: "Endereço da mãe incompleto" },
        { value: nasc.bairroMae, message: "Endereço da mãe incompleto" },
        { value: nasc.cidadeMae, message: "Endereço da mãe incompleto" },
        { value: nasc.ufMae, message: "Endereço da mãe incompleto" },
        { value: nasc.nomePai, message: "Nome do pai não informado" },
        { value: nasc.maePai, message: "Nome do avó paterna não informado" },
        { value: nasc.paiPai, message: "Nome do avô paterno não informado" },
        { value: nasc.ruaPai, message: "Endereço do pai incompleto" },
        { value: nasc.numPai, message: "Endereço do pai incompleto" },
        { value: nasc.bairroPai, message: "Endereço do pai incompleto" },
        { value: nasc.cidadePai, message: "Endereço do pai incompleto" },
        { value: nasc.ufPai, message: "Endereço do pai incompleto" },
      ])

      await app
        .db("nascimento")
        .where(builder => {
          builder.whereRaw("unaccent(nome) ILIKE ?", [`%${nomeParam}%`])
        })
        .update({
          nome: nasc.nome,
          CPF: nasc.CPF,
          natCidade: nasc.natCidade,
          natUf: nasc.natUf,
          rua: nasc.rua,
          num: nasc.num,
          bairro: nasc.bairro,
          cidade: nasc.cidade,
          uf: nasc.uf,
          dataNascimento: nasc.dataNascimento,
          hora: nasc.hora,
          nomeMae: nasc.nomeMae,
          maeMae: nasc.maeMae,
          paiMae: nasc.paiMae,
          ruaMae: nasc.ruaMae,
          numMae: nasc.numMae,
          bairroMae: nasc.bairroMae,
          cidadeMae: nasc.cidadeMae,
          ufMae: nasc.ufMae,
          nomePai: nasc.nomePai,
          maePai: nasc.maePai,
          paiPai: nasc.paiPai,
          ruaPai: nasc.ruaPai,
          numPai: nasc.numPai,
          bairroPai: nasc.bairroPai,
          cidadePai: nasc.cidadePai,
          ufPai: nasc.ufPai,
        })

      res.status(204).send()
    } catch (error) {
      return res.status(500).send({ message: error.message })
    }
  }

  const insert = async (req, res) => {
    const nasc = req.body

    try {
      validateFields([
        { value: nasc.nome, message: "Nome não informado" },
        { value: nasc.CPF, message: "CPF não informado" },
        { value: nasc.natCidade, message: "Cidade natal não informada" },
        { value: nasc.natUf, message: "UF da cidade natal não informada" },
        { value: nasc.rua, message: "Endereço incompleto" },
        { value: nasc.num, message: "Endereço incompleto" },
        { value: nasc.bairro, message: "Endereço incompleto" },
        { value: nasc.cidade, message: "Endereço incompleto" },
        { value: nasc.uf, message: "Data incompleta" },
        { value: nasc.dataNascimento, message: "Data incompleta" },
        { value: nasc.hora, message: "Data incompleta" },
        { value: nasc.nomeMae, message: "Nome da mãe não informado" },
        { value: nasc.maeMae, message: "Nome do avó materna não informado" },
        { value: nasc.paiMae, message: "Nome do avô materno não informado" },
        { value: nasc.ruaMae, message: "Endereço da mãe incompleto" },
        { value: nasc.numMae, message: "Endereço da mãe incompleto" },
        { value: nasc.bairroMae, message: "Endereço da mãe incompleto" },
        { value: nasc.cidadeMae, message: "Endereço da mãe incompleto" },
        { value: nasc.ufMae, message: "Endereço da mãe incompleto" },
        { value: nasc.nomePai, message: "Nome do pai não informado" },
        { value: nasc.maePai, message: "Nome do avó paterna não informado" },
        { value: nasc.paiPai, message: "Nome do avô paterno não informado" },
        { value: nasc.ruaPai, message: "Endereço do pai incompleto" },
        { value: nasc.numPai, message: "Endereço do pai incompleto" },
        { value: nasc.bairroPai, message: "Endereço do pai incompleto" },
        { value: nasc.cidadePai, message: "Endereço do pai incompleto" },
        { value: nasc.ufPai, message: "Endereço do pai incompleto" },
      ])

      await app.db("nascimento").insert({
        nome: nasc.nome,
        CPF: nasc.CPF,
        natCidade: nasc.natCidade,
        natUf: nasc.natUf,
        rua: nasc.rua,
        num: nasc.num,
        bairro: nasc.bairro,
        cidade: nasc.cidade,
        uf: nasc.uf,
        dataNascimento: nasc.dataNascimento,
        hora: nasc.hora,
        nomeMae: nasc.nomeMae,
        maeMae: nasc.maeMae,
        paiMae: nasc.paiMae,
        ruaMae: nasc.ruaMae,
        numMae: nasc.numMae,
        bairroMae: nasc.bairroMae,
        cidadeMae: nasc.cidadeMae,
        ufMae: nasc.ufMae,
        nomePai: nasc.nomePai,
        maePai: nasc.maePai,
        paiPai: nasc.paiPai,
        ruaPai: nasc.ruaPai,
        numPai: nasc.numPai,
        bairroPai: nasc.bairroPai,
        cidadePai: nasc.cidadePai,
        ufPai: nasc.ufPai,
      })
      res.status(204).send()
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }

  const getByName = (req, res) => {
    const nome = req.params.nome
    app
      .db("nascimento")
      .where(builder => {
        builder.whereRaw("unaccent(nome) ILIKE ?", [`%${nome}%`])
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
        "hora",
        "nomeMae",
        "maeMae",
        "paiMae",
        "ruaMae",
        "numMae",
        "bairroMae",
        "cidadeMae",
        "ufMae",
        "nomePai",
        "maePai",
        "paiPai",
        "ruaPai",
        "numPai",
        "bairroPai",
        "cidadePai",
        "ufPai"
      )
      .then(nasc => res.json(nasc))
      .catch(err => res.status(500).send(err))
  }

  const remove = async (req, res) => {
    const nomeParam = req.params.nome

    try {
      await app
        .db("nascimento")
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
