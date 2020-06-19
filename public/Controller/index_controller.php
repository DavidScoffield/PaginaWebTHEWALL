<?php 
    
    //comprueba si hay una sesion abierta, si la hay redirige a InicialPage    
    session_start();
    if (isset($_SESSION['usuario'])) {
        header('Location: InicialPage.php');
    }

    require("View/index_view.php")

?>