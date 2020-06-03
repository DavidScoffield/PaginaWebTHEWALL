<?php 
    
    require_once("Model/Usuario.php");
    require_once("BD.php");
    require_once("Model/LoginRegister.php");
    $conexion= new Conexion();


    if(isset($_POST['user_login'])){
        $nombre_usuario= $_POST['user_login'];
        $contrasenia= $_POST['password_login'];
        $user= new UsuarioLogIn($nombre_usuario,$contrasenia);
        
        $login= new Login();
        if($login->Logearse($user)){
            echo "LOGEADO, SE ENCONTRO UN USUARIO CON LOS DATOS";
            if(isset($usuarioIncorrecto)){
                unset($usuarioIncorrecto);
            }
        }else{
            $usuarioIncorrecto=true;
        }

    }
    
    
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
        $img_type= substr($img_type,6);  //elimino del string la parte "image/"

        $user= new UsuarioRegistro($email,$nombre,$apellido,$nombre_usuario,$contrasenia,$img,$img_type);

        if(!$registro->nombreUsuarioExiste($user->getNombreUsuario())){
            if(isset($usuarioExistente)){
                unset($usuarioExistente);
            }
            $registro->registrarUsuario($user);
        }else{
            echo "EL USUARIO YA EXISTE";
            $usuarioExistente=true;
        }
        
    }

    require("View/index_view.php")

?>