/*window.onload = async () => {

    productos = await obtenerProducto();
    mostrarProducto(productos);
    console.log(productos);
}


async function obtenerProducto() {
    let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    let producto = datos.results;
    return producto;
}

function mostrarProducto(productos) {
    const tbodyElement = document.getElementById("mostrarProducto")

    tbodyElement.innerHTML = ""

    productos.forEach(producto => {
        tbodyElement.innerHTML += `  
    <tr>
        <td>${producto.title}</td>
        <td><a href="${producto.permalink}">ver producto</a></td>
        <td><img src="${producto.thumbnail}"></td>
        <td>${producto.price}</td>
        <td><button onclick=guardarProducto('${producto.id}')> Guardar </button></td>

        </tr>
        `;
    });

}

const tbodyElement = document.getElementById("mostrarProducto")
let productos = [];

async function guardarProducto(producto) {
    let producto = productos.find((elemento) => elemento.id === id)
    console.log(producto);
    
    }
    let url = "https://localhost/actividad_API/back/controlador/controlador.php?funcion=guardarproducto";
    console.log(url);
    let formData = new FormData()
    formData.append("id", producto.id);
    formData.append("title", producto.title);
    formData.append("permalink", producto.permalink);
    formData.append("thumbnail", producto.thumbnail);
    formData.append("price", producto.price);
    let config = {
        method: 'POST',
        body: formData, 
    }

    let respuesta = await fetch(url, config);
    let rec = await respuesta.json();
    console.log(rec);

    // return rec;
*/
window.onload = async () => {
    // Cuando la ventana se carga, ejecuta el siguiente código de manera asíncrona.

    productos = await obtenerProducto();
    // Llama a la función obtenerProducto(), que obtiene los productos desde una API,
    // y espera a que se complete. Luego, almacena los resultados en la variable `productos`.

    mostrarProducto(productos);
    // Llama a la función mostrarProducto() pasando los productos obtenidos 
    // como argumento para mostrarlos en la tabla.

    console.log(productos);
    // Muestra en la consola los productos obtenidos, para propósitos de depuración.

    function mostrarProducto(productos) {
        // Función que se encarga de mostrar los productos en la tabla HTML.

        const tbodyElement = document.getElementById("mostrarProducto");
        // Obtiene la referencia al elemento <tbody> donde se insertarán los productos.

        tbodyElement.innerHTML = "";
        // Limpia cualquier contenido previo dentro del <tbody>.

        productos.forEach(producto => {
            // Recorre cada producto en la lista de productos.

            tbodyElement.innerHTML += `  
            <tr>
                <td>${producto.title}</td>
                <!-- Muestra el título del producto en una celda -->
                <td><a href="${producto.permalink}">ver producto</a></td>
                <!-- Muestra un enlace que dirige al producto en una celda -->
                <td><img src="${producto.thumbnail}"></td>
                <!-- Muestra la imagen en miniatura del producto en una celda -->
                <td>${producto.price}</td>
                <!-- Muestra el precio del producto en una celda -->
                <td><button onclick=guardarProducto('${producto.id}')> Guardar </button></td>
                <!-- Muestra un botón que, al ser clickeado, llama a la función guardarProducto() pasando el id del producto -->
            <tr>
            `;
        });
        // Agrega dinámicamente filas a la tabla con los datos de cada producto.
    }
}

const tbodyElement = document.getElementById("mostrarProducto");
// Declara una referencia al elemento <tbody> fuera de las funciones para su posible uso.

let productos = [];
// Declara una variable global `productos` como un array vacío para almacenar los productos obtenidos.

async function obtenerProducto() {
    // Función asíncrona para obtener los productos desde una API.

    let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
    // Define la URL de la API de MercadoLibre para obtener productos de una categoría específica.

    let respuesta = await fetch(url);
    // Hace una solicitud HTTP GET a la URL y espera la respuesta.

    let datos = await respuesta.json();
    // Convierte la respuesta en formato JSON.

    return datos.results;
    // Devuelve los resultados de los productos obtenidos desde la API.
}

async function guardarProducto(id) {
    // Función asíncrona que se encarga de guardar el producto en el servidor backend.

    const producto = productos.find((elemento) => elemento.id = id);
    // Busca el producto en el array `productos` cuyo id coincida con el id proporcionado.

    console.log(producto);
    // Muestra el producto en la consola para depuración.

    let url = "http://localhost/actividad_API/back/controlador/conrolador.php?funcion=guardarproducto";
    // Define la URL del backend donde se va a guardar el producto.

    let formData = new FormData();
    // Crea un objeto FormData para enviar los datos en la solicitud POST.

    // Agrega los datos del producto al FormData.
    formData.append("id", producto.id);
    formData.append("title", producto.title);
    formData.append("permalink", producto.permalink);
    formData.append("thumbnail", producto.thumbnail);
    formData.append("price", producto.price);

    let config = {
        method: 'POST',
        body: formData
    };
    // Configura la solicitud POST, especificando el método y el cuerpo de la solicitud (FormData).

    let respuesta = await fetch(url, config);
    // Envía la solicitud al backend con los datos del producto y espera la respuesta.

    let rec = await respuesta.text();
    // Convierte la respuesta en texto.

    console.log(rec);
    // Muestra la respuesta del servidor en la consola, generalmente para verificar si se guardó correctamente.
}


