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
        /* document.getElementById("resultado").innerText = `
            ID: ${usuario.id}
            Nombre: ${usuario.nombre}
            Apellido: ${usuario.apellido}
            Dirección: ${usuario.direccion}
            Email: ${usuario.email}
        `; */

    // También podemos mostrar el objeto completo en la consola para verlo en formato JSON
    console.log(usuario);
};

// Asociamos el evento de clic al botón para guardar los datos
document.getElementById("guardarBtn").addEventListener("click", guardarValor);


document.getElementById("guardarBtn").addEventListener("click", () => {
    guardarValor();
    generarFactura();
});

// Función para generar la factura
export const generarFactura = () => {
    // Obtener los datos del usuario
    const idUsuario = usuario.id;
    const nombreUsuario = usuario.nombre;
    const apellidoUsuario = usuario.apellido;
    
    // Obtener el número de factura generado
    const numeroFactura = document.querySelector("generate-code").shadowRoot.querySelector("#codigo").value;

    // Obtener los productos de la tabla de resumen
    const productos = [];
    const filas = document.querySelectorAll("#tablaResumen tbody tr");
    filas.forEach(fila => {
        const producto = {
            codigo: fila.cells[0].textContent,
            nombre: fila.cells[1].textContent,
            precio: fila.cells[2].textContent,
            cantidad: fila.cells[3].textContent,
            total: fila.cells[4].textContent
        };
        productos.push(producto);
    });

    // Verificar si ya existe una factura
    let facturaElement = document.querySelector("#factura");
    
    // Si la factura no existe, crear una nueva
    if (!facturaElement) {
        facturaElement = document.createElement('div');
        facturaElement.setAttribute('id', 'factura');
        document.body.appendChild(facturaElement);
    }

    // Crear el HTML de la factura
    let facturaHTML = `
        <div class="factura">
            <h2>Factura #${numeroFactura}</h2>
            <p><strong>Cliente:</strong> ${nombreUsuario} ${apellidoUsuario}</p>
            <p><strong>ID de Cliente:</strong> ${idUsuario}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
            <table>
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
    `;

    // Agregar los productos a la factura
    productos.forEach(producto => {
        facturaHTML += `
            <tr>
                <td>${producto.codigo}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.total}</td>
            </tr>
        `;
    });

    facturaHTML += `
                </tbody>
            </table>
            <p><strong>Total de la compra: </strong>$${calcularTotalCompra(productos)}</p>
        </div>
    `;

    // Actualizar el contenido de la factura existente
    facturaElement.innerHTML = facturaHTML;
};


// Función para calcular el total de la compra
const calcularTotalCompra = (productos) => {
    return productos.reduce((total, producto) => total + parseFloat(producto.total), 0).toFixed(2);
};


// Función para actualizar la factura con los datos más recientes
// Función para actualizar la factura con los datos más recientes
// Función para actualizar la factura con los datos más recientes
const actualizarFactura = () => {
    // Verificar si ya existe una factura en el DOM
    let facturaElement = document.querySelector("#factura");
    if (!facturaElement) {
        // Si no existe, crear una nueva factura
        facturaElement = document.createElement('div');
        facturaElement.setAttribute('id', 'factura');
        document.body.appendChild(facturaElement);
    }

    // Obtener el número de factura generado
    let facturaNum = document.querySelector("#codigo").value; // Número de factura generado en el input

    // Crear el contenido de la factura
    facturaElement.innerHTML = `
        <h3>Factura - Número: ${facturaNum}</h3>
        <h4>Datos del Usuario:</h4>
        <p>ID: ${usuario.id}</p>
        <p>Nombre: ${usuario.nombre}</p>
        <p>Apellido: ${usuario.apellido}</p>
        <p>Dirección: ${usuario.direccion}</p>
        <p>Email: ${usuario.email}</p>
        
        <h4>Productos:</h4>
        <table id="tablaResumen">
            <thead>
                <tr>
                    <th>Cod</th>
                    <th>Nombre</th>
                    <th>V/Unidad</th>
                    <th>Cantidad</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <!-- Las filas de los productos se agregarán aquí -->
                ${generarFilasProductos()}
            </tbody>
        </table>
    `;
};

// Función que genera las filas con los productos de la tabla resumen
const generarFilasProductos = () => {
    // Obtener los productos de la tabla de resumen
    let filas = '';
    const rows = document.querySelectorAll("#tablaResumen tbody tr");

    rows.forEach(row => {
        let cod = row.children[0].textContent;
        let nombre = row.children[1].textContent;
        let precio = row.children[2].textContent;
        let cantidad = row.children[3].textContent;
        let total = row.children[4].textContent;

        filas += `
            <tr>
                <td>${cod}</td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>${total}</td>
            </tr>
        `;
    });

    return filas;

    
};
