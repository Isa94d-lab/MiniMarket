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
      this.attachShadow({ mode: "open" }); // Usar Shadow DOM para encapsulación
    }
  
    connectedCallback() {
      // Crear el contenido del componente con estilos incluidos
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos para las etiquetas de formularios */
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
  
          div.form-text {
            display: block;
            font-size: .875rem;
            color: #6c757d;
            margin-top: .25rem;
          }
  
          .form-label {
            display: flex;
            align-items: flex-start;
            text-align: left !important;
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

      
  
      // Referencias a elementos del Shadow DOM
      const addProductButton = this.shadowRoot.querySelector("#addProduct");
      const productContainer = this.shadowRoot.querySelector(".detailproduct");

  
      // Evento para añadir el HTML dinámico
      addProductButton.addEventListener("click", () => {
        
        const productId = `product-${Date.now()}`; // Generar ID único
        const productHTML = `
          <div class="conteiner1 conteiner2" id="${productId}">
            <div class="cuadrado3">
              <table>
                <tr>
                  <td>
                    <label for="code-product" class="form-label">Código de producto:</label>
                    <select class="form-control form-select form-select2" aria-label="Default select example" id="product-select">
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
                    <input class="form-control form-select2" type="text" id="name-product" value="No se ha ingresado un producto" aria-label="Disabled input example" disabled readonly>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="price-product" class="form-label">Precio por unidad:</label>
                    <input class="form-control form-select2" type="text" id="price-product" value="No se ha ingresado un producto" aria-label="Disabled input example" disabled readonly>
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
  
      // Evento para eliminar dinámicamente las entradas
      productContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
          const productId = e.target.getAttribute("data-id");
          const productElement = this.shadowRoot.getElementById(productId);
          if (productElement) {
            productElement.remove();
          }
        }

        // Si el botón que se presionó es el de enviar
        if (e.target.id === "guardarBtn2") {
          guardarProducto(e.target.closest(".conteiner1"));
        }
      });

      // Evento de cambio en el select
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
  
  // Definir el componente
  customElements.define("product-component", ProductComponent);
  
  // Función para guardar el producto
  export const guardarProducto = (productContainer) => {
    let code = productContainer.querySelector("#product-select").value;
    let name = productContainer.querySelector("#name-product").value; 
    let price = productContainer.querySelector("#price-product").value;
    let cantidad = productContainer.querySelector("#cantidad").value;

    producto.code = code;          // Guardamos el codigo del producto
    producto.name = name;          // Guardamos el nombre del producto
    producto.price = price;        // Guardamos el precio del producto
    producto.cantidad = cantidad;  // Guardamos la cantidad del producto

    console.log(producto); 

    const guardarBtn = document.getElementById("guardarBtn");

}; 


 