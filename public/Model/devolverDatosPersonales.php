<?php 
    require_once("clasesPHP/ClassInfoPersonal.php");

    $nombre_usuario = $_POST['username'];
    
    $personal= new DatosPersonales();
    $datosPersonales= $personal->getDatosPersonales($nombre_usuario);

       
    $datosPersonales['foto_contenido']=base64_encode($datosPersonales['foto_contenido']);
    echo json_encode($datosPersonales);

?>