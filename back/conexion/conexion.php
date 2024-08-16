<?php
header("Acses-Control-Allow-Origin:*");
function connection (){
    $host = "localhost";
    $usuario = "root";
    $password = "";
    $bd = "productos";
    $puerto = 3306; 
    $mysql = new mysqli($host,$usuario,$password, $bd, $puerto);
    mysqli_report(MYSQLI_REPORT_OFF); 
    return $mysql;
}



?>