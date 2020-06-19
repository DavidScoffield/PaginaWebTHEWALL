<?php 

    require_once("clasesPHP/ClassInfoPersonal.php");

    $actContrasenia=$_POST['passwordActual'];
    $nombre_usuario=$_POST['username'];

    $personal = new DatosPersonales();

    $resultadoConsulta=$personal->contraseñaCorrecta($actContrasenia,$nombre_usuario);

    unset($personal);

    echo json_encode($resultadoConsulta);

?>