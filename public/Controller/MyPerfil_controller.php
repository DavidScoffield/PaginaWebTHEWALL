<?php 
    
    require_once("BD.php");
    require_once("Model\infoPersonal.php");
    

    //comprueba si hay una sesion abierta    
    session_start();
    if (!isset($_SESSION['usuario'])) {
        header('Location: index.php');
    }
    $nombre_usuario = $_SESSION['usuario'];

    $personal= new DatosPersonales();
    $datosPersonales= $personal->getDatosPersonales($nombre_usuario);
    



    require_once("View/MyPerfil_view.php");

?>