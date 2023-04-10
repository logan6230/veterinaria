//1. Conectarnos a la ruta /listar_especies.
// 2. Recorrer el Json
// 2.1 Agregar una fila en la tabla por cada objeto retornado en Json.

class EspecieAPI {
    async guardarEspecie() {

        // Paso 1.
        // TO DO: La API no deberia estar sin proteccion
        const especie = await fetch("http://localhost:3000/listar_especies");
        especie = await especie.json;
        const miTabla = document.getElementById('table-especies')
        // Paso 2: recorrer el Json

        especie.array.forEach(
            (especie) => {
                const fila = miTabla.insertRow()
                fila.insertCeld().innerText=especie.id_especie;
                fila.insertCeld().innerText=especie.nombre_especie;
                fila.insertCeld().innerText=especie.clasificacion;
                fila.insertCeld().innerText=especie.esperanza_vida;
                fila.insertCeld().innerText=especie.peso_promedio;
            });

    }
}

export default EspecieAPI;
