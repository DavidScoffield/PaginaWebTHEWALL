<?php 

    require_once("clasesPHP/ClassMeGusta.php");

    $idMeGusta=$_POST['idMeGusta'];
    
    $MG= new MeGusta();

    $resultadoOp= $MG->disLike($idMeGusta);

    unset($MG);
    
    echo json_encode($resultadoOp);

?>