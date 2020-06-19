<?php 

    require_once("clasesPHP/ClassInfoPersonal.php");
    require_once("clasesPHP/ClassUsuariosSeguidos.php");

    $nombre_usuario = $_POST['username'];
    $nombre_usuario_a_seguir = $_POST['usernameASeguir'];
    
    $personal= new DatosPersonales();
    $Objseguir= new ClassSeguir();

    $idPersonal= $personal->getId($nombre_usuario);
    $idUsuarioASeguir= $personal->getId($nombre_usuario_a_seguir);

    $resultadoOp= $Objseguir->seguir($idPersonal, $idUsuarioASeguir);

    if($resultadoOp){
        $idFollow= $Objseguir->comprobarSeguimiento($idPersonal,$idUsuarioASeguir);
        $idFollow=$idFollow['id'];
    }else{
        $idFollow=null;
    }

    unset($personal);
    unset($Objseguir);
    
    echo json_encode($idFollow);

?>