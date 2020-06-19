<?php 

    require_once("clasesPHP/ClassInfoPersonal.php");
    require_once("clasesPHP/ClassUsuariosSeguidos.php");

    $nombre_usuario = $_POST['username'];
    $nombre_usuario_verificar = $_POST['usernameComprobar'];
    
    $personal= new DatosPersonales();
    $ObjSeguir= new ClassSeguir();

    $idPersonal= $personal->getId($nombre_usuario);
    $idUsuarioAVerificar= $personal->getId($nombre_usuario_verificar);

    $idFollow= $ObjSeguir->comprobarSeguimiento($idPersonal, $idUsuarioAVerificar);

    unset($personal);
    unset($ObjSeguir);
    
    $idFollow=$idFollow['id'];
    echo json_encode($idFollow);

?>