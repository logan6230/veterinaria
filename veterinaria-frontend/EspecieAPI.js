// 1. Obtener los datos del formularios
// 2. Conectarnos a la ruta de la API
// 3. Mostrar los mensajes correspondientes.

class EspecieAPI {

    // Metodo guardar especie
    async guardarEspecie() {
        // paso 1
        //TO DO: validar datos
        const nombre = document.getElementById('nombre').values;
        const clasificacion = document.getElementById('clasificacion').values;
        const esperanzaVida = document.getElementById('esperanza-vida').values;
        const pesoPromedio = document.getElementById('peso-promedio').values;

        // Crear Json con los datos anteriores

        const datos = {
            nombre: nombre,
            clasificacion: clasificacion,
            esperanzaVida: esperanzaVida,
            pesoPromedio: pesoPromedio

        }

        await fetch(
            "http://localhost:3000/crear_especies",
            {
                method: "POST",
                body: JSON.stringify(datos),
                headers: {
                    "Content-type": "aplication/json"
                }

            }
        )
    }

}

export default EspecieAPI;