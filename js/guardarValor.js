// Creamos un objeto literal para almacenar los datos
let usuario = {};

// Función para guardar el valor ingresado por el usuario
export const guardarValor = () => {
    // Obtener el valor ingresado en los campos de texto
    let id = document.getElementById("id_Usuario").value;
    let nombre = document.getElementById("nombre_Usuario").value;
    let apellido = document.getElementById("apellido_Usuario").value;
    let direccion = document.getElementById("direccion_Usuario").value;
    let email = document.getElementById("email_Usuario").value;

    // Almacenar los valores obtenidos en el objeto usuario
    usuario.id = id;          // Guardamos el ID del usuario
    usuario.nombre = nombre;  // Guardamos el nombre del usuario
    usuario.apellido = apellido; // Guardamos el apellido del usuario
    usuario.direccion = direccion; // Guardamos la dirección del usuario
    usuario.email = email;    // Guardamos el email del usuario

    // Mostrar los datos almacenados en el párrafo con id="resultado"
    document.getElementById("resultado").innerText = `
        ID: ${usuario.id}
        Nombre: ${usuario.nombre}
        Apellido: ${usuario.apellido}
        Dirección: ${usuario.direccion}
        Email: ${usuario.email}
    `;

    // También podemos mostrar el objeto completo en la consola para verlo en formato JSON
    console.log(usuario);
};

// Asociamos el evento de clic al botón para guardar los datos
document.getElementById("guardarBtn").addEventListener("click", guardarValor);