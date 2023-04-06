const express = require('express');
const AdminEspecie = require('./AdminEspecie');

class veterinariaAPI {
    constructor() {
        this.puerto = 3000;
        this.app = express();
        this.app.use(express.json());
        this.adminEspecie = new AdminEspecie();
        this.app.get('/listar_especies', (req, res) => { this.adminEspecie.listarEspecie(req, res); });
        this.app.post('/crear_especies', (req, res) => { this.adminEspecie.crearEspecie(req, res); });
        this.app.use(this.configurarCORS);
        
    }

    configurarCORS(req,res, next) {

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();

    }
    iniciarServidor() {
        this.app.listen(this.puerto, () => {
            console.log(`Escuchando en el puerto ${this.puerto}`);
        });
    }
    

}

const veterinaria = new veterinariaAPI();
veterinaria.iniciarServidor();