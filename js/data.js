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

export class ProductComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          label.form-label {
            display: flex;
            margin-bottom: .5rem;
            font-weight: 600;
            margin-top: .5rem;
            justify-content: center;
          }

          .form-control {
            display: block;
            padding: .375rem .75rem;
            width: 500px;
            font-size: 1rem;
            line-height: 1.5;
            background-color: #fff;
            border: 1px solid #ced4da;
            border-radius: .25rem;
          }

          .form-control1 {
            width: 500px;
          }

          button {
            display: inline-block;
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            background-color: #007bff;
            color: #fff;
            transition: background-color 0.2s ease, border-color 0.2s ease;
            margin-top: 5px;
          }

          button:hover {
            background-color: #0056b3;
            border-color: #004085;
          }

          button:disabled {
            background-color: #6c757d;
            border-color: #6c757d;
            cursor: not-allowed;
            opacity: 0.65;
          }

          .cuadrado3 {
            background-color: white;
            margin-top: 10px;
            padding-top: 10px;
            height: 240px; 
            width: 1100px; 
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 8px; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
          }

          .orden {
            display: flex;
            flex-direction: row;
          }
        </style>
        <button type="button" class="addProduct" id="addProduct">+</button>
        <div class="detailproduct"></div>
      `;

      const addProductButton = this.shadowRoot.querySelector("#addProduct");
      const productContainer = this.shadowRoot.querySelector(".detailproduct");

      addProductButton.addEventListener("click", () => {
        const productId = `product-${Date.now()}`;
        const productHTML = `
          <div class="conteiner1 conteiner2" id="${productId}">
            <div class="cuadrado3">
              <table>
                <tr>
                  <td>
                    <label for="code-product" class="form-label">Código de producto:</label>
                    <select class="form-control form-select form-select2" id="product-select">
                      <option selected>Selecciona un código de producto</option>
                      <option value="1">101</option>
                      <option value="2">102</option>
                      <option value="3">103</option>
                      <option value="4">104</option>
                      <option value="5">105</option>
                      <option value="6">106</option>
                    </select>
                  </td>
                  <td>
                    <label for="name-product" class="form-label">Producto seleccionado:</label>
                    <input class="form-control form-select2" type="text" id="name-product" value="No se ha ingresado un producto" disabled readonly>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="price-product" class="form-label">Precio por unidad:</label>
                    <input class="form-control form-select2" type="text" id="price-product" value="No se ha ingresado un producto" disabled readonly>
                  </td>
                  <td>
                    <label for="cantidad" class="form-label">Cantidad:</label>
                    <input type="number" id="cantidad" class="form-control form-select2" placeholder="Ingresa la cantidad">
                  </td>
                </tr>
              </table>
              <div class="orden">
                <button id="guardarBtn2">Enviar</button>
                <button class="delete-btn" data-id="${productId}">-</button>
              </div>
            </div>
          </div>
        `;
        productContainer.insertAdjacentHTML("beforeend", productHTML);
      });

      productContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
          const productId = e.target.getAttribute("data-id");
          const productElement = this.shadowRoot.getElementById(productId);
          if (productElement) {
            productElement.remove();
          }
        }

        if (e.target.id === "guardarBtn2") {
          guardarProducto(e.target.closest(".conteiner1"));
        }
      });

      productContainer.addEventListener('change', function(e) {
        if (e.target.id === 'product-select') {
          const productId = parseInt(e.target.value);
          const selectedProduct = data_products.find(product => product[0] === productId);

          const nameProductInput = e.target.closest('.cuadrado3').querySelector('#name-product');
          const priceProductInput = e.target.closest('.cuadrado3').querySelector('#price-product');

          if (selectedProduct) {
            nameProductInput.value = selectedProduct[1].nombre;
            priceProductInput.value = selectedProduct[1].precio;
          } else {
            nameProductInput.value = "No se ha ingresado un producto";
            priceProductInput.value = "No se ha ingresado un producto";
          }
        }
      });
    }
  }

// -------------------------------------------------

  customElements.define("product-component", ProductComponent);

  export const guardarProducto = (productContainer) => {
    // Obtener los valores del formulario
    let code = productContainer.querySelector("#product-select").value;
    let name = productContainer.querySelector("#name-product").value;
    let price = productContainer.querySelector("#price-product").value; // Mantener el formato original
    let cantidad = parseInt(productContainer.querySelector("#cantidad").value); // Obtener la cantidad ingresada

    // Calcular el total
    let total = parseFloat(price) * cantidad; // Mantener como string para evitar conversión de decimales

    // Crear el objeto producto
    let producto = {
        code: code,
        name: name,
        price: price,
        cantidad: cantidad,
        total: total.toString() // Convertir total a string para mantener el formato
    };

    // Verificar si ya existe una fila con ese código
    let filaExistente = document.querySelector(`#tablaResumen tbody tr[data-code="${code}"]`);
    if (filaExistente) {
        // Si existe, reemplazar los valores de la fila
        reemplazarFilaExistente(filaExistente, producto);
    } else {
        // Si no existe, agregar una nueva fila
        agregarFilaTabla(producto);
    }
};

// Función para agregar una nueva fila a la tabla
// Función para agregar una nueva fila a la tabla
const agregarFilaTabla = (producto) => {
    // Obtener el cuerpo de la tabla
    let tbody = document.querySelector("#tablaResumen tbody");

    // Crear una nueva fila
    let fila = document.createElement("tr");
    fila.setAttribute("data-code", producto.code); // Asignar el código al atributo de la fila

    // Crear celdas y agregar los datos del producto
    let tdCode = document.createElement("td");
    tdCode.textContent = producto.code;
    fila.appendChild(tdCode);

    let tdName = document.createElement("td");
    tdName.textContent = producto.name;
    fila.appendChild(tdName);

    let tdPrice = document.createElement("td");
    tdPrice.textContent = producto.price; // Mostrar el precio tal como está
    fila.appendChild(tdPrice);

    let tdCantidad = document.createElement("td");
    tdCantidad.textContent = producto.cantidad;
    fila.appendChild(tdCantidad);

    let tdTotal = document.createElement("td");
    tdTotal.textContent = producto.total; // Mostrar el total tal como está
    fila.appendChild(tdTotal);

    // Crear celda para el botón eliminar
    let tdDelete = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "-";
    deleteButton.classList.add("delete-row-btn");
    deleteButton.setAttribute("data-code", producto.code); // Asignar el código al botón
    tdDelete.appendChild(deleteButton);
    fila.appendChild(tdDelete);

    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(fila);
};

// Manejador para eliminar fila de la tabla y formulario asociado
document.querySelector("#tablaResumen").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-row-btn")) {
        const code = e.target.getAttribute("data-code"); // Obtener el código del producto
        const fila = e.target.closest("tr");

        if (fila) {
            // Eliminar fila de la tabla
            fila.remove();

            // Buscar y eliminar formulario asociado en los formularios dinámicos
            const formContainer = document.querySelector(".detailproduct");
            const form = formContainer.querySelector(`[data-code="${code}"]`);
            if (form) {
                form.remove();
            }
        }
    }
});


