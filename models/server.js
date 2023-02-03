
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../config/db');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.paths = {
            auth: '/api/auth',
        }

        this.middlewares();
        this.routes();
        this.bd();
    }

    middlewares() {

        // CORS
        this.app.use(cors()); 

        // carpeta public
        this.app.use(express.static('public'));

        // parsear requests JSON
        this.app.use(express.json());

    }

    async bd() {
        await dbConnection();
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App Running at port ${this.port}`);
        });
    }

}

module.exports = Server;