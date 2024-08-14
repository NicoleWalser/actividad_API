window.onload = ()=>{
    let productos = await obtenerProducto();
    await mostrarProducto(productos);
    console.log(productos);
}

    
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
        <td><a href="${producto.permalink}"></td>
        <td><img scr="${producto.thumbnail}"></td>
        <td>${producto.price}</td>
        `;
        let boton = document.createElement("button")
        boton.onclick = ()=>{guardarProducto(producto)};
        let td = document.createElement("td");
        td.appendChild(boton);
        tr.appendChild(td);
        tBodyProductos.appendChild(tr);
        boton.textContent = "GuardarProducto";
    });

    }  


    async function guardarProducto(producto)({
    console.log(producto);
    let url = 
    let formData = new Forapata()
    formData.append("id", producto.id);
    formData.append("title", producto.title);
    formData.append("link", producto.permalink);
    formData.append("img", producto.thumbnail);
    formData.append("price", producto.price);

    let config ={
        method: 'POST'
        body: formData   
    }
       
        let respuesta= await fetch(url, config);
        let rec = await respuesta.json();
        console.log(rec);


}



