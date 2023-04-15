const express = require('express');
const AdminEspecie = require('./AdminEspecie');

class veterinariaAPI {
    constructor() {
        this.puerto = process.env.PORT || 8080;
        this.app = express();

        this.adminEspecie = new AdminEspecie();

        this.app.use(this.configurarCORS);
        this.app.use(express.json());

        this.app.get('/listar_especies', (req, res) => {
            this.adminEspecie.listarEspecie(req, res);
        });
        this.app.post('/crear_especies', (req, res) => {

            if (req.body.nombre == "" || req.body.especie == "" || req.body.edad == "" || req.body.peso_promedio == "") {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'los campos son obligatorios'
                });
            }

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

    iniciarServidor() {
        this.app.listen(this.puerto, () => {
            console.log(`Escuchando en el puerto ${this.puerto}`);
        });
    }
}
const veterinaria = new veterinariaAPI();
veterinaria.iniciarServidor();