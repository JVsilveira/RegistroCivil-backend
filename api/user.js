const bcrypt = require("bcrypt-node")

module.exports = app => {
  const { existsOrError, equalsOrError } = app.api.validator

  const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }

  const insert = async (req, res) => {
    const user = req.body

    try {
      existsOrError(user.nome, "Nome não informado")
      existsOrError(user.email, "E-mail não informado")
      existsOrError(user.password, "Senha não informada")
      existsOrError(user.confirmPassword, "Confirmação da senha não informada")
      equalsOrError(
        user.password,
        user.confirmPassword,
        "As senhas não conferem"
      )

      user.password = encryptPassword(user.password)

      delete user.confirmPassword

      await app.db("users").insert({
        nome: user.nome,
        CPF: user.CPF,
        email: user.email,
        password: user.password,
        admin: user.admin,
      })
      res.status(204).send()
    } catch (error) {
      res.status(500).send({ message: message })
    }
  }

  const getByName = (req, res) => {
    app
      .db("users")
      .select("id", "nome", "CPF", "email", "admin")
      .where({ nome: req.params.nome })
      .first()
      .then(user => res.json(user))
      .catch(err => res.status(500).send(err))
  }

  const remove = async (req, res) => {
    const nome = req.params.nome
    try {
      existsOrError(req.params.nome, "Usuário não informado.")

      const rowsDeleted = await app
        .db("users")
        .where(builder => {
          builder.whereRaw("nome ILIKE ?", [`${nome}%`])
        })
        .del()
      existsOrError(rowsDeleted, "Usuário não encontrado.")
      res.status(204).send()
    } catch (msg) {
      res.status(400).send(msg)
    }
  }

  return { insert, getByName, remove }
}
