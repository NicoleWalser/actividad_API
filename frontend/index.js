window.onload = async () => {

    productos = await obtenerProducto();
    mostrarProducto(productos);
    console.log(productos);


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
            <tr>
            `; 
        });

    }

}
const tbodyElement = document.getElementById("mostrarProducto")
let productos= [];
async function obtenerProducto() {
    let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
    let respuesta = await fetch(url);
    let datos = await respuesta.json();

    return datos.results;
}


async function guardarProducto(id) {
    const producto= productos.find((elemento)=>elemento.id=id)
    console.log(producto);
    let url = "http://localhost/actividad_API/back/controlador/conrolador.php?funcion=guardarProducto"
    let formData = new FormData()
    formData.append("id", producto.id);
    formData.append("title", producto.title);
    formData.append("permalink", producto.permalink);
    formData.append("thumbnail", producto.thumbnail);
    formData.append("price", producto.price);

    let config = {
        method: 'POST',
        body: formData
    }

    let respuesta = await fetch(url, config);
    let rec = await respuesta.json();
    console.log(rec);

}




