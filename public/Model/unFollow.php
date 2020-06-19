<?php 

    require_once("clasesPHP/ClassUsuariosSeguidos.php");

    $idFollow=$_POST['idFollow'];
    
    $follow= new ClassSeguir();

    $resultadoOp= $follow->dejarDeSeguir($idFollow);

    unset($follow);
    
    echo json_encode($resultadoOp);

?>