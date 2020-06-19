<?php

    //COMPRUEBA SI HAY UNA SESION ABIERTA    
    session_start();
    if (!isset($_SESSION['usuario'])) {
        header('Location: index.php');
    }
    $nombre_usuario = $_SESSION['usuario'];


    require_once("View/editDate_view.php");

?>