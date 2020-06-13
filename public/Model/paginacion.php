<?php 

   if(isset($_GET['pagina'])){
      if($_GET['pagina']==1){
         header("Location:" . $_SERVER['PHP_SELF']. "");
      }else{
         $pagina=$_GET['pagina'];
      }
   }else{
      $pagina=1;
   }
   $cant_msj_por_pagina=10;
   $total_paginas=ceil($cantMensajes/$cant_msj_por_pagina);
   $empezar_desde=($pagina-1)*$cant_msj_por_pagina;


?>