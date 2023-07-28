const { authSecret } = require("../.env")
const jwt = require("jwt-simple")
const bcrypt = require("bcrypt-node")

module.exports = app => {
  const signin = async (req, res) => {
    if (!req.body.nome || !req.body.password) {
      return res.status(400).send("Informe usuário e senha.")
    }
    const user = await app.db("users").where({ nome: req.body.nome }).first()

    if (!user) return res.status(400).send("Usuário/Senha inválidos.")
    const isMatch = bcrypt.compareSync(req.body.password, user.password)
    if (!isMatch) return res.status(401).send("Usuário/Senha inválidos.")
    const now = Math.floor(Date.now() / 1000)

    const payload = {
      id: user.id,
      nome: user.nome,
      CPF: user.CPF,
      email: user.email,
      admin: user.admin,
      iat: now,
      exp: now + (60 * 60 + 12),
    }
    res.json({
      ...payload,
      token: jwt.encode(payload, authSecret),
    })
  }
  const validateToken = (req, res) => {
    const userData = req.body || null
    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret)
        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true)
        }
      }
    } catch (error) {
      return res.send(false)
    }

    res.send(false)
  }
  return { signin, validateToken }
}
