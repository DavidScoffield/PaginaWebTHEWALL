<?php 
    require_once("clasesPHP/ClassInfoPersonal.php");

    $nombre_usuario = $_POST['username'];
    
    $personal= new DatosPersonales();
    $datosPersonales= $personal->getDatosPersonalesBasicos($nombre_usuario);

       
    echo json_encode($datosPersonales);

?>