<?php

    require_once("clasesPHP/ClassMensaje.php");
    require_once("clasesPHP/ClassMeGusta.php");
    
    $id=$_POST['id'];

    $ObjMensaje= new Mensajes();
    $ObjMG= new MeGusta();

    // COMPRUEBO QUE NO TENGA MG ESE MSJ 
    if($ObjMG->cantMeGusta($id)!=0){
        // ELIMINO TODOS LOS MG QUE TENGA ASOCIADO EL MSJ
        $ObjMG->eliminarMeGustasDelMensaje($id);
    }

    //LUEGO QUE YA ME ASEGURE QUE NO TIENE MG, LO ELIMINO
    $resultado=$ObjMensaje->deleteMsj($id);


    unset($ObjMensaje);

    echo json_encode($resultado);

?>
