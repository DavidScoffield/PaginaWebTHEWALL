<?php 

    require_once("clasesPHP/ClassInfoPersonal.php");

    $personal = new DatosPersonales();
    //ACTUALIZAR FORMULARIO DE CONTRASEÑAS
  
    $newContrasenia=$_POST['newPassword'];
    $nombre_usuario=$_POST['username'];

    
    $resultadoOP=$personal->updatePassword($newContrasenia, $nombre_usuario);
    
    //ELIMINO LAS VARIABLES UNA VEZ QUE YA SE REALIZARON LOS PASOS NECESARIOS CON ESTAS
    unset($actContrasenia);
    unset($newContrasenia);
    unset($personal);

    echo json_encode($resultadoOP);
 ?>