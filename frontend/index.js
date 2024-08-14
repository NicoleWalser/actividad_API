window.onload = ()=>{
    
async function obtenerProducto() {
    let url="https://api.mercadolibre.com/sites/MLU/search?category=MLU1144"; 
    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    console.log(datos);
    let productos= datos.respuesta;
    return productos;
}
function mostrarProducto(productos){
    let tbodyElement = document.querySelector("#mostrarProducto")
    tbodyElement.innerHTML=""   
    productos.forEach(productos => {
    let tr =document.mostrarProductos("tr")
    tr.innerHTML+=`  
        <td>${producto.title}</td>
        <td>${producto.permalink}</td>
        <td><img scr"${producto.thumbnail}"></td>
        <td>${producto.price}</td>
        <td><button onclick="guardarProducto('${producto.title}', '${producto.permalink}', '${producto.thumbnail}', '${producto.price}')">Guardar</button></td>
        `;
        tbodyElement.appendChild(tr);
    }  )
}


    function guardarProducto(title, permalink, thumbnail, price) {
        

    }


}

obtenerProducto().then(productos => mostrarProducto(productos)); // Llamar a la función para obtener y mostrar productos