const {PrismaClient} =require('@prisma/client');

class AdminEspecie {
    constructor() {
        this.prisma = new PrismaClient();

    }
    async crearEspecie(req, res) {
        const datos = req.body;
        const especies = await this.prisma.especie.create({
            data: {
                nombre: datos.nombre,
                especie: datos.especie,
                edad: datos.edad,
                peso_promedio: datos.peso_promedio
            }
        });
        res.json(especies);
    };
    async listarEspecie(req, res) {
        const especies = await this.prisma.especie.findMany();
        res.json(especies);
    }
}
module.exports = AdminEspecie;