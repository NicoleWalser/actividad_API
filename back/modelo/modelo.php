<?php
require_once "../conexion/conexion.php";

$funcion guardarProducto($id, $title, $permalink, $thumbnail, $price){
    $connection = connection();
    $sql = "INSERT INTO productos VALUES ("$id', '$title', '$permalink', '$thumbnail', '$price')";
    $respuesta = $conection-> query
    $return $respuesta;

}
  
?>