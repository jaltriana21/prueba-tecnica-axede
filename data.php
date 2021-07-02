<?php

require 'conexion.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

if(isset($_POST['submit'])){
    $hotel = $_POST['hotel'];
    $tarifa = $_POST['tarifa'];
    $numeroHabitacion = $_POST['numeroHabitacion'];
    $fecha = $_POST['fecha'];
    $cupo = $_POST['cupo'];
    echo $hotel;

    $sql = 'SELECT * FROM hotels'; 
    $sentencia_agregar = $conexion->prepare($sql_agregar);
    $sentencia_agregar->execute(array($nombre,$email,$contrasena_cifrada));
    
};









