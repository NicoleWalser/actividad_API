<?php
require_once "../modelo/modelo.php";

$funcion = $_GET ['funcion'];
switch($funcion){
    case "guardarproducto";
    guardarProducto();
    break;

}
$funcion guardarProducto(){
    $id = $_POST['id'];
    $title = $_POST['title'];
    $permalink = $_POST['permalink'];
    $thumbnail = $_POST['thumbnail'];
    $price = $_POST['price'];

    $producto = (new productos())-> guardarProducto($id, $title, $permalink, $thumbnail, $price);
    echo json_encode($producto);
}
?>