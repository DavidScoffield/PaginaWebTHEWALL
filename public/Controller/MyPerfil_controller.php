<?php 
    
    require_once("BD.php");
    require_once("Model\infoPersonal.php");
    require_once("Model\mensaje.php");
    
    
    //comprueba si hay una sesion abierta    
    session_start();
    if (!isset($_SESSION['usuario'])) {
        header('Location: index.php');
    }
    $nombre_usuario = $_SESSION['usuario'];
    
    $personal= new DatosPersonales();
    $datosPersonales= $personal->getDatosPersonales($nombre_usuario);
    
    //publicar msj si es existe
    require_once("Model/publicarMensaje.php");
    
    //recuperar todos los mensajes personales
    $mensajesObj= new Mensajes();
    $cantMensajes= $mensajesObj->cantMensajesPropios($nombre_usuario);
    require_once("Model\paginacion.php");

    $mensajes= $mensajesObj->getMensajesPropios($nombre_usuario,$empezar_desde,$cant_msj_por_pagina);
    unset($mensajesObj);



    require_once("View/MyPerfil_view.php");

?>