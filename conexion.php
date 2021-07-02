<?php 
	try {
		$conexion = new PDO('mysql:host=localhost;dbname=hoteles', 'root', '');
	} catch(PDOException $e){
		echo "Error: " . $e->getMessage();
	}