<?php

require_once("BD.php");
require_once("Model/infoPersonal.php");
require_once("Model/Usuario.php");

$personal = new DatosPersonales();


//comprueba si hay una sesion abierta    
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: index.php');
}
$nombre_usuario = $_SESSION['usuario'];

//actualizar formulario de datos(que no contiene contraseña)
if (isset($_POST['first-name'])) {
    $email = $_POST['email'];
    $nombre = $_POST['first-name'];
    $apellido = $_POST['last-name'];
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
    $personal->updateDatosPersonales($user);    //se actualizan los datos
    $datosGeneralesActualizados=true;

    //elimino las variables una vez que ya se realizaron los pasos necesarios con estas
    unset($email);
    unset($nombre);
    unset($apellido);
    unset($contrasenia);
    if ($_FILES['img_profile']['name'] != null) { 
        unset($img_type);
        unset($img_tamanio);
        unset($img_temporal);
    }
}


//actualizar formulario de contraseñas
if(isset($_POST['actualPassword'])){
    $actContrasenia=$_POST['actualPassword'];
    $newContrasenia=$_POST['newPassword'];
    if($personal->contraseñaCorrecta($actContrasenia,$nombre_usuario)){
        $personal->updatePassword($newContrasenia, $nombre_usuario);
        $contraseniaIncorrecta=false;
    }else{
        // echo "Contraseña incorrecta";  
        $contraseniaIncorrecta=true;      
    }

    //elimino las variables una vez que ya se realizaron los pasos necesarios con estas
    unset($actContrasenia);
    unset($newContrasenia);
}



//obtener los datos propios de la base de datos

$datosPersonales = $personal->getDatosPersonales($nombre_usuario);

require_once("View/editDate_view.php");

?>