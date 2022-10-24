const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    // this.app(cors());

    this.port = process.env.PORT;

    this.usuarioPath = "/api/usuarios";

    //Conectar a base de datos
    this.ConectorDB();

    // Middlewares
    this.middleware();

    //Rutas de mi aplicación
    this.router();
  }

  async ConectorDB() {
    await dbConnection();
  }

  middleware() {
    //CORS
    this.app.use(cors());

    //lectura y parseo del body
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static("public"));//-> Para que el servidor pueda servir archivos estáticos
  }

  router() {
    this.app.use(this.usuarioPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${process.env.PORT}!`);
    });
  }
}

module.exports = Server;
