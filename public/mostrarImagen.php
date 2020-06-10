 <?php 
    // require("BD.php");

    // $link= new Conexion();
	// // se recibe el valor que identifica la imagen en la tabla
	// $id = $_GET['id']; 
    
    // // se recupera la información de la imagen
	// $sql = "SELECT foto_contenido, foto_tipo FROM usuarios WHERE id=:id"; 


    // $result = $link->conexion_db->prepare($sql); 
	// $result = $link->conexion_db->execute(array(":id"=>1)); 
    // $row=$resultado->fetch(PDO::FETCH_ASSOC)['foto_contenido']; 
       
	// // // se imprime la imagen y se le avisa al navegador que lo que se está  enviando no es texto, sino que es una imagen de un tipo en particular
    // // header("Content-type: image/jpeg");
    // // //  . $row['foto_tipo']);
    // // echo $row['foto_contenido']; 
 


// se recibe el valor que identifica la imagen en la tabla
    $id = $_GET['id']; 

    $link = mysqli_connect('localhost', 'root','','thewall') ;

    // se recupera la información de la imagen
    $sql = "SELECT foto_contenido, foto_tipo FROM usuarios WHERE id=:1";
    
    $result = mysqli_query($link, $sql); 
    $row = mysqli_fetch_array($result); 
    mysqli_close($link); 

    // se imprime la imagen y se le avisa al navegador que lo que se está 
    // enviando no es texto, sino que es una imagen de un tipo en particular
    header("Content-type: image/jpeg");
    //  . $row['foto_tipo']); 
    echo $row['foto_contenido']; 



?>