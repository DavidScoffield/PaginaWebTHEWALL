<?php 

    require_once("clasesPHP/ClassInfoPersonal.php");
    require_once("clasesPHP/ClassMeGusta.php");

    $nombre_usuario = $_POST['username'];
    $idMensaje = $_POST['idMensaje'];
    
    $personal= new DatosPersonales();
    $MG= new MeGusta();

    $idPersonal= $personal->getId($nombre_usuario);

    $idMeGusta= $MG->diMeGusta($idPersonal, $idMensaje);

    unset($personal);
    unset($MG);
    
    echo json_encode($idMeGusta);

?>