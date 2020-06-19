<?php 
    
    require_once("clasesPHP/ClassMensaje.php");
    
    date_default_timezone_set("America/Argentina/Buenos_Aires");
 
    $ObjMensaje= new Mensajes();
    
    $nombre_usuario=$_POST['username'];


    if(isset($_POST['msj'])){           //comprobar si se intruduo un msj en el textarea
        $msj=$_POST['msj'];
    }else{
        $msj=null;
    }

    if ($_FILES['img_profile']['name'] != null) {                     //se comprueba si se desea publicar una imagen, es decir si se cargo una imagen o se dejo el input vacio
        $img_type = $_FILES['img_profile']['type'];
        $img_tamanio = $_FILES['img_profile']['size'];
        $img_temporal = $_FILES['img_profile']['tmp_name'];
        
        $img = $ObjMensaje->convertirImgBLOB($img_tamanio, $img_temporal, $img_type);  //en img esta el conjunto de bytes para almacenar en la BD
        $img_type = substr($img_type, 6);                                          //elimino del string la parte "image/"
        
    } else {
        $img = null;
        $img_type = null;
    }
    
    $ObjMensaje->publicarMsj($msj,$img,$img_type,date("Y-m-d H:i:s"),$nombre_usuario); 

    

    unset($ObjMensaje);



?>