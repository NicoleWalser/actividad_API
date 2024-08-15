<?php
require_once "../conexion/conexion.php";
class Producto{
    function guardarProducto($id, $title, $permalink, $thumbnail, $price){
        $connection = connection();
        $sql = "INSERT INTO producto VALUES ('$id', '$title', '$permalink', '$thumbnail', '$price')";
        $respuesta = $connection->query($sql);
        return $respuesta;
    
    } 
}


  
?>