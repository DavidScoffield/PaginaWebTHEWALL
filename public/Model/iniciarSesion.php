<?php 

    require_once("clasesPHP/ClassUsuario.php");
    require_once("clasesPHP/ClassLoginRegister.php");


if(isset($_POST['user_login'])){
    $nombre_usuario= $_POST['user_login'];
    $contrasenia= $_POST['password_login'];
    $user= new UsuarioLogIn($nombre_usuario,$contrasenia);
    
    $login= new Login();
    if($login->Logearse($user)){            //se encontro usuario con los datos ingresados
        session_start();
        $_SESSION['usuario']=$nombre_usuario;
        echo json_encode($logeado=true); 
        
    }else{                                  //no existe el usuario
        echo json_encode($logeado=false);
    }

}

?>