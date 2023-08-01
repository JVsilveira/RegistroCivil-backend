const bodyParser = require("body-parser")
const cors = require("cors")
const corsOptions = {
  origin:
    "Acess-Control-Allow-Origin: https://registro-civil-frontend.vercel.app/",
}

module.exports = app => {
  app.use(bodyParser.json())
  app.use(cors(corsOptions))
}
