<?php 

    require_once("clasesPHP/ClassUsuariosSeguidos.php");

    $nombre_usuario = $_POST['username'];
    $paginaInicio = $_POST['inicio'];


    //recuperar todos los mensajes personales
    $ObjSeguir= new ClassSeguir();
    $cantUsuariosSeguidos= $ObjSeguir->cantUsuariosSeguidos($nombre_usuario);
    
    
    //PAGINACION
    $cant_msj_por_pagina=10;
    $empezar_desde=($paginaInicio-1)*$cant_msj_por_pagina;


    $usuarios= $ObjSeguir->getUsuariosSeguidos($nombre_usuario,$empezar_desde,$cant_msj_por_pagina);
    unset($ObjSeguir);

    foreach ($usuarios as $usuario) {
        $usuario->foto_contenido=base64_encode($usuario->foto_contenido);
    }

    $array=[$usuarios,$cantUsuariosSeguidos];
    echo json_encode($array);

?>