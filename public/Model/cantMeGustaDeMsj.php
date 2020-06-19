<?php 

    require("clasesPHP/ClassMeGusta.php");

    $idMensaje= $_POST['idMensaje'];

    $MG= new MeGusta();

    $cantMG= $MG->cantMeGusta($idMensaje);

    echo json_encode($cantMG);

?>