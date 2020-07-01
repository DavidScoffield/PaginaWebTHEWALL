<?php 

    require_once("../BD.php"); 

    class BusquedaUsuario extends Conexion{

        public function  __construct(){
            parent::__construct();
        }

        public function busqueda(string $busca, $user){
            
            try{

                $sql= "SELECT id, nombre, apellido, nombreusuario FROM usuarios WHERE (nombreusuario LIKE :u OR nombre LIKE :n OR apellido LIKE :a) AND (nombreusuario<>:user)";
                $busqUsuario= $this->conexion_db->prepare($sql);
                $busqUsuario->execute(array(":u"=>"%{$busca}%",":n"=>"%{$busca}%",":a"=>"%{$busca}%",":user"=>$user));
                $resultado= $busqUsuario->fetchAll(PDO::FETCH_OBJ);
                $busqUsuario->closeCursor();
                return $resultado;
            }catch(Exception $e){
                
                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
                
            }
        }

    }    

?>
