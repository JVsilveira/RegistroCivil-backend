const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
app.db = db

consign()
  .then('./config/middlewares.js')
  .then('./api/validator.js')
  .then('./api/nascimento.js')
  .then('./api/casamento.js')
  .then('./api/obito.js')
  .then('./api/user.js')
  .then('./api/auth.js')
  .then('./config/routes.js')
  .into(app)

app.listen(3000, () => {
  console.log('Backend executando...')
})
