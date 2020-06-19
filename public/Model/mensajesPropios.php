<?php 

    require_once("clasesPHP/ClassMensaje.php");

    $nombre_usuario = $_POST['username'];
    $paginaInicio = $_POST['inicio'];


    //recuperar todos los mensajes personales
    $mensajesObj= new Mensajes();
    $cantMensajes= $mensajesObj->cantMensajesPropios($nombre_usuario);
    
    
    //PAGINACION
    // require_once("paginacion.php");
    $cant_msj_por_pagina=10;
    $empezar_desde=($paginaInicio-1)*$cant_msj_por_pagina;


    // $mensajes= $mensajesObj->getMensajesPropios($nombre_usuario,0,0);
    $mensajes= $mensajesObj->getMensajesPropios($nombre_usuario,$empezar_desde,$cant_msj_por_pagina);
    unset($mensajesObj);

    foreach ($mensajes as $mensaje) {
        $mensaje->imagen_contenido=base64_encode($mensaje->imagen_contenido);
    }

    $array=[$mensajes,$cantMensajes];
    echo json_encode($array);

?>