<?php 
    
    require_once("BD.php");

    session_start();
    if(!isset($_SESSION['usuario'])){
        header('Location: index.php');
    }   

    require_once("View/InicialPage_view.php");

?>