<?php 
       
    //comprueba si hay una sesion abierta    
    session_start();
    if (!isset($_SESSION['usuario'])) {
        header('Location: index.php');
    }
    $nombre_usuario = $_SESSION['usuario'];
 

    require_once("View/MyPerfil_view.php");

?>