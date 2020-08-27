<?php

    require_once("Model/BusquedaUsuario.php");


    if(isset($_GET['user_search']) && $_GET['user_search']!=false){
        $busca = $_GET['user_search'];
        $B = new BusquedaUsuario();
        $resultado = $B->busqueda($busca,$nom);
    }

?>