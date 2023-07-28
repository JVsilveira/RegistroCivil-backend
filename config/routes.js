module.exports = app => {
  // user
  app.post("/signup", app.api.user.insert)
  app.post("/signin", app.api.auth.signin)
  app.post("/validateToken", app.api.auth.validateToken)
  app.route("/users").post(app.api.user.insert)
  app
    .route("/users/:nome")
    .get(app.api.user.getByName)
    .delete(app.api.user.remove)

  // nascimento

  app.route("/nascimento/nome/:nome").get(app.api.nascimento.getByName)

  app.route("/nascimento/atualizar/:nome").put(app.api.nascimento.update)

  app.route("/nascimento/deletar/:nome").delete(app.api.nascimento.remove)

  app.route("/nascimento/inserir/").post(app.api.nascimento.insert)

  // casamento

  app.route("/casamento/nome/:nome").get(app.api.casamento.getByName)

  app.route("/casamento/atualizar/:nome").put(app.api.casamento.update)

  app.route("/casamento/deletar/:nome").delete(app.api.casamento.remove)

  app.route("/casamento/inserir/").post(app.api.casamento.insert)

  // obito

  app.route("/obito/nome/:nome").get(app.api.obito.getByName)

  app.route("/obito/atualizar/:nome").put(app.api.obito.update)

  app.route("/obito/deletar/:nome").delete(app.api.obito.remove)

  app.route("/obito/inserir/").post(app.api.obito.insert)
}
