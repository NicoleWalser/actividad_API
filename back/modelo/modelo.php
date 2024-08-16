<?php

require_once "../conexion/conexion.php";

class Producto{

    function productoExiste($id) { 
        $connection = connection();
        $sql = "SELECT id FROM producto WHERE id = '$id'";
        $resultado = $connection->query($sql);
        return $resultado->num_rows > 0;
    }

    function guardarProducto($id, $title, $permalink, $thumbnail, $price){

            $connection = connection();

            if ($this->productoExiste($id)) { 

                $respuesta=$this->actualizarProducto($id, $title, $permalink, $thumbnail, $price); 

            } else {
                $sql = "INSERT INTO producto VALUES ('$id', '$title', '$permalink', '$thumbnail', $price);";
                $respuesta = $connection->query($sql);
               
            }
            return $respuesta;
}

    function actualizarProducto($id, $title, $permalink, $thumbnail, $price){

        $connection = connection();
        $sql = "UPDATE producto SET title = '$title', permalink = '$permalink', thumbnail = '$thumbnail', price = '$price' WHERE id = '$id';";
        $respuesta = $connection->query($sql); //sentencia sql
        return $respuesta;
}
}
