# MiniMarket
 http://localhost:5173/ - https://minimarket-stefphanigalvis.netlify.app/

======================================================

## Descripcion 📌
Este proyecto tiene como objetivo desarrollar una interfaz web intuitiva para la gestion de compra de productos. Permite a los usuarios ingresar sus datos personales, seleccionar productos segun su codigo predefinido y especificar la cantidad deseada de cada articulo. El sistema almacena esta informacion y muestra los productos seleccionados en una tabla dinamica. Ademas, puede generar una factura con los datos del usuario, los productos elegidos, el precio total de la compra y un IVA del 19%. Este sistema facilita la visualizacion y confirmacion de los detalles de la compra antes de proceder al pago.

## Funcionalidades del proyecto ⛏️

Al momento de renderizar el codigo HTML desde el archivo "index.html" se mostrara la pagina principal con, 

1. **Formulario para la Informacion De Usuario**
- Numero de factura -> Se genera uno unico siempre que se actualize la web
- ID -> Input (Permite al usuario ingresar su informacion)
- Nombre usuario -> Input (Permite al usuario ingresar su informacion)
- Apellido usuario -> Input (Permite al usuario ingresar su informacion)
- Direccion -> Input (Permite al usuario ingresar su informacion)
- Email -> Input (Permite al usuario ingresar su informacion)
- [ENVIAR] -> Boton encargado de enviar la informacion ingresada a la factura
<img src="https://github.com/user-attachments/assets/19cb4457-8860-4922-b8f9-95ebcf2bfe0f">


2. **Añadir producto**
- [ + ] -> Boton para permitirle al usuario agregar otro producto
- Seleccionar producto -> (Le permite al usuario seleccionar un codigo de producto)
- Producto seleccionado -> (Dependiendo del codigo seleccionado por el usuario, se mostrara el nombre)
- Precio por unidad -> (Dependiendo del codigo seleccionado por el usuario, se mostrara el precio por unidad)
- Cantidad -> Input (Permite al usuario ingresar la cantidad de producto deseado)
<img src="https://github.com/user-attachments/assets/462d02fd-8b74-4be3-a7f8-32b788845381">

3. **Factura**
- Numero de Factura -> Se muestra el numero de factura generado
- Nombre del cliente
- ID del cliente
- Tabla con los productos agregados
- Precio original -> Suma del precio de los productos seleccionados
- IVA (19%) -> Iva
- Total con iva -> Precio con IVA agregado
<img src="https://github.com/user-attachments/assets/e75898c0-d596-4b0f-8cc4-5fcda8ad88eb">

## Tecnologias Utilisadas 🚀
- JavaScript: Utilizado específicamente para la creación y eliminación dinámica de formularios (permitiendo la selección de nuevos productos), generación de un código único para cada factura, y el almacenamiento de la información ingresada por el cliente
- CSS: Usado para agregar estilos y personalización a los elementos de la interfaz, mejorando la experiencia visual y de usuario
- HTML: Se utilizó como la base principal o esqueleto del proyecto, proporcionando la estructura fundamental de la pagina

## Caracteristicas 📦
1. **Numero de Factura Unico**
2. **Actualizar elementos de productos**
3. **Agregar y Eliminar elementos**
4. **Ceacion de Factura segun elementos ingresados**

## Instalación 📫
1. Prerrequisitos
- Git: Necesitaras Git para clonar el repositorio. Descargalo desde [git](https://git-scm.com/) 
- Un editor de texto como VSCode o cualquier otro de tu preferencia 
  
2. Codigos en la terminal para instalar el proyecto
- git clone https://github.com/Isa94d-lab/MiniMarket.git
- cd MiniMarket

3. Ejecutar el codigo desde el archivo *"index.html"*

## Licencia 📜
Este proyecto esta bajo la Licencia MIT. Para mas detalles [LICENSE](LICENSE) 
   
## Realizado por ✒️
Isabella Stephani Galvis Sandoval
