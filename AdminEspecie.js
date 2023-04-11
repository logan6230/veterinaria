const {PrismaClient} =require('@prisma/client');

class AdminEspecie {
    constructor() {
        this.prisma = new PrismaClient();

    }
    async crearEspecie(req, res) {
        const datos = req.body;
        const especie = await this.prisma.especie.create({
            data: {
                nombre: datos.nombre,
                clasificacion: datos.clasificacion,
                esperanza_vida: datos.esperanza_vida,
                peso_promedio: datos.peso_promedio
            }
        });
        res.json(especie);
    };
    async listarEspecie(req, res) {
        const especies = await this.prisma.especie.findMany();
        res.json(especies);
    }
}
module.exports = AdminEspecie;