<?php

    require_once("clasesPHP\ClassBusquedaUsuario.php");

    $busca = $_POST['busca'];
    $user = $_POST['username'];
    $B = new BusquedaUsuario;
    $resultado = $B->busqueda($busca,$user); 
    echo json_encode($resultado);
?>