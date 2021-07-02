<?php

    header('content-Type: application/json');   
    header('Access-Control-Allow-Origin: *');  

    include_once 'conexion.php'; 

    $sql = 'SELECT * FROM hotels'; 

    $sentencia = $conexion->prepare($sql);   
    $sentencia->execute(); 
    $datos = $sentencia->fetchAll(); 
    
    echo json_encode($datos);
