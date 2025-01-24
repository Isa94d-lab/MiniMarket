// Objeto literal para almacenar los datos
const productosGuardados = {};

export const guardarProducto = {
    // Función para guardar los datos en el objeto
    guardarDatos(codigo, valor, cantidad) {
        // Crear un nuevo objeto para el producto con su código, valor y cantidad
        const producto = {
            'codigo_producto': codigo,
            'valor': valor,
            'cantidad': cantidad
        };

        // Guardamos el producto en el objeto productosGuardados usando el código como clave
        productosGuardados[codigo] = producto;

        // Mostrar los datos guardados
        console.log(productosGuardados);
    },
};