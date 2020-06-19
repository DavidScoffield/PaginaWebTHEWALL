<?php 

    require("clasesPHP/ClassMensaje.php");

    $id= $_POST['id'];

    $objMensaje= new Mensajes();
    $datos= $objMensaje->getDatosBasicos($id);

    $datos[0]->foto_contenido=base64_encode($datos[0]->foto_contenido);
    unset($objMensaje);

    echo json_encode($datos[0]);


?>