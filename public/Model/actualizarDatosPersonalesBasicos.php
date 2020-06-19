<?php 

    require_once("clasesPHP/ClassInfoPersonal.php");
    require_once("clasesPHP/ClassUsuario.php");

    $personal = new DatosPersonales();
    //ACTUALIZAR FORMULARIO DE DATOS(QUE NO CONTIENE CONTRASEÑA)
    $email = $_POST['email'];
    $nombre = $_POST['first-name'];
    $apellido = $_POST['last-name'];
    $nombre_usuario = $_POST['username'];
    $contrasenia = null;
    
    if ($_FILES['img_profile']['name'] != null) {                     //se comprueba si se desea actualizar la imagen, es decir si se cargo una imagen o se dejo el input vacio
        $img_type = $_FILES['img_profile']['type'];
        $img_tamanio = $_FILES['img_profile']['size'];
        $img_temporal = $_FILES['img_profile']['tmp_name'];
        
        $img = $personal->convertirImgBLOB($img_tamanio, $img_temporal, $img_type);  //en img esta el conjunto de bytes para almacenar en la BD
        $img_type = substr($img_type, 6);                                          //elimino del string la parte "image/"
        
    } else {
        $img = null;
        $img_type = null;
    }
    
    
    $user = new Usuario($email, $nombre, $apellido, $nombre_usuario, $contrasenia, $img, $img_type);//objeto que se enviara a la funcion que actualice los datos
    $resultado=$personal->updateDatosPersonales($user);    //se actualizan los datos
    $datosGeneralesActualizados=true;
    
    //ELIMINO LAS VARIABLES UNA VEZ QUE YA SE REALIZARON LOS PASOS NECESARIOS CON ESTAS
    unset($email);
    unset($nombre);
    unset($apellido);
    unset($contrasenia);
    if ($_FILES['img_profile']['name'] != null) { 
        unset($img_type);
        unset($img_tamanio);
        unset($img_temporal);
    }

    echo json_encode($resultado);
 ?>