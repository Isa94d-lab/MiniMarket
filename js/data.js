let producto = {};
// Datos de productos
export const data_products = [
    [
        1, 
        { 
            'nombre': 'Galletas', 
            'precio': '2.000' 
        }
    ],

    [
        2, 
        { 
            'nombre': 'Cocacola', 
            'precio': '3.000' 
        }
    ],

    [
        3, 
        { 
            'nombre': 'Cereal', 
            'precio': '1.500' 
        }
    ],

    [
        4, 
        { 
            'nombre': 'Café', 
            'precio': '5.000' 
        }
    ],

    [
        5, 
        { 
            'nombre': 'Leche', 
            'precio': '2.500' 
        }
    ],

    [
        6, 
        { 
            'nombre': 'Pan', 
            'precio': '1.000' 
        }
    ]
];

// Selección de los elementos con los id de los inputs
export const selectElement = document.querySelector("#product-select");
export const productNameInput = document.querySelector("#name-product"); // Input del nombre del producto
export const productPriceInput = document.querySelector("#price-product"); // Input del precio del producto

// Evento de cambio en el select
selectElement.addEventListener('change', function() {
    const productId = parseInt(selectElement.value);  // Obtener el valor seleccionado
    const selectedProduct = data_products.find(product => product[0] === productId); // Buscar el producto

    if (selectedProduct) {
        productNameInput.value = selectedProduct[1].nombre;  // Actualizar el nombre del producto
        productPriceInput.value = selectedProduct[1].precio; // Actualizar el precio del producto
    } else {
        productNameInput.value = "No se ha ingresado un producto";
        productPriceInput.value = "No se ha ingresado un producto";
    }

});

export const guardarProducto = () => {

    let code = document.getElementById("product-select").value;
    let name = document.getElementById("name-product").value;
    let price = document.getElementById("price-product").value;
    let cantidad = document.getElementById("cantidad").value;

    producto.code = code;          // Guardamos el codigo del producto
    producto.name = name;  // Guardamos el nombre del producto
    producto.price = price; // Guardamos el precio del producto
    producto.cantidad = cantidad; // Guardamos la cantidad del producto

    console.log(producto);

}
