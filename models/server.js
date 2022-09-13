const express = require('express');
const cors = require('cors');


class Server {

    constructor() { 
        this.app = express();
        
        this.port = process.env.PORT;

        this.usuarioPath = '/api/usuarios';
        
        // Middlewares
        this.middleware();
        
        //Rutas de mi aplicación
        this.router();
    }

    middleware() {
        //CORS
        this.app.use(cors())

        //lectura y parseo del body
        this.app.use(express.json());
        

        // Directorio público
        this.app.use( express.static('public') );
    }

    router(){
        this.app.use(this.usuarioPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${process.env.PORT}!`);
        });
    }

}


module.exports = Server;