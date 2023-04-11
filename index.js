const express = require('express');
const AdminEspecie = require('./AdminEspecie');

class veterinariaAPI {
    constructor() {
        this.puerto = 3000;
        this.app = express();

        this.adminEspecie = new AdminEspecie();

        this.app.use(this.configurarCORS);
        this.app.use(express.json());

        //TO DO: Eror!!!! Estoy confiando en los datos que me llega del front end
        this.app.get('/listar_especies', (req, res) => {

            this.adminEspecie.listarEspecie(req, res);
        });
        this.app.post('/crear_especies', (req, res) => {
            console.log(req.body);
            this.adminEspecie.crearEspecie(req, res);
        });
        this.app.use(this.configurarCORS);

    }

    configurarCORS(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();

    }
    //TO DO: No estoy gestionando las excepciones.
    iniciarServidor() {
        this.app.listen(this.puerto, () => {
            console.log(`Escuchando en el puerto ${this.puerto}`);
        });
    }


}

const veterinaria = new veterinariaAPI();
veterinaria.iniciarServidor();