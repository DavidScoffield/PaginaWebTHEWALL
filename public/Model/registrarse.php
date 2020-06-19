<?php 

require_once("clasesPHP/ClassUsuario.php");
require_once("clasesPHP/ClassLoginRegister.php");

if(isset($_POST['email_register'])){
    $email= $_POST['email_register'];
    $nombre= $_POST['first_name_register'];
    $apellido= $_POST['last_name_register'];
    $nombre_usuario= $_POST['user_register'];
    $contrasenia= $_POST['password_register'];

    $img_type= $_FILES['img_profile_register']['type'];
    $img_tamanio= $_FILES['img_profile_register']['size'];
    $img_temporal= $_FILES['img_profile_register']['tmp_name'];

    $registro= new Registro();
    $img=$registro->convertirImgBLOB($img_tamanio,$img_temporal,$img_type);  //en img esta el conjunto de bytes para almacenar en la BD
    $img_type= substr($img_type,6);                 //elimino del string la parte "image/"

    $user= new Usuario($email,$nombre,$apellido,$nombre_usuario,$contrasenia,$img,$img_type);

    if(!$registro->nombreUsuarioExiste($user->getNombreUsuario())){     //el nombre de usuario que eligio esta disponible para ser usado
        // if(isset($usuarioExistente)){
        //     unset($usuarioExistente);
        // }
        $registro->registrarUsuario($user);
        session_start();
        $_SESSION['usuario']=$nombre_usuario;
        // header('Location:InicialPage.php');
        echo json_encode(true);
    }else{                                                                 //no esta disponible el nombre de usuario elegido
        echo json_encode(false);
        // $usuarioExistente=true;
    }
    
}

?>