const express = require('express');
const cors = require('cors');


class Server {

    constructor(){
        this.app = express();
        this.PORT = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();



        // Rutas de mi aplicación
        this.routes()
    }

    middlewares(){
        // CORS
        this.app.use( cors() );
        
        // Lectura y parseo del body
        this.app.use( express.json() );
        
        // Directorio público
        this.app.use( express.static('public'));

    }

    routes() {
       
        this.app.use( this.usuariosPath , require('../routes/usuarios'));



    }

    listen() {

        this.app.listen( this.PORT , () => {
            console.log( 'Server runs on port', this.PORT )
        })

    }


}


module.exports = Server;
