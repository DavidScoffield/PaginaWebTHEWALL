<?php 

    require_once("../BD.php"); 

    class ClassSeguir extends Conexion{

        public function  __construct(){
            parent::__construct();
        }
        
        public function seguir($idPersonal,$idUsuarioASeguir){
            try{

                $sql= "INSERT INTO siguiendo (usuarios_id, usuarioseguido_id)
                       VALUES (:idPersonal,:idUsuarioSeguido)";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":idPersonal"=>$idPersonal,":idUsuarioSeguido"=>$idUsuarioASeguir));
                $resultadoOp= ($resultado->rowCount()>0);
                
                $resultado->closeCursor();
                
                return $resultadoOp;            

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        public function dejarDeSeguir($idFollow){ 
            try{

                $sql= "DELETE FROM siguiendo WHERE id=:idFollow";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":idFollow"=>$idFollow));
                $resultadoOp= ($resultado->rowCount()>0);
                
                $resultado->closeCursor();
                
                return $resultadoOp;           

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        public function comprobarSeguimiento($idPersonal, $idUsuarioAVerificar){
            try{

                $sql= "SELECT id FROM siguiendo WHERE usuarios_id=:usuario_id AND usuarioseguido_id=:usuarioseguido_id";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":usuario_id"=>$idPersonal,":usuarioseguido_id"=>$idUsuarioAVerificar));
                if($resultado->rowCount()>0){
                    $idFollow=$resultado->fetch(PDO::FETCH_ASSOC);
                }else{
                    $idFollow=["id"=>-1];
                }

                $resultado->closeCursor();
                
                return $idFollow;            

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        public function getUsuariosSeguidos($nombreusuario,$desde,$cantidad){
            try{
                $sql= "SELECT usuarios.id , usuarios.nombreusuario, usuarios.foto_contenido, usuarios.foto_tipo, siguiendo.id AS IDfollow 
                       FROM usuarios INNER JOIN siguiendo ON usuarios.id=siguiendo.usuarioseguido_id 
                       WHERE siguiendo.usuarios_id IN (SELECT id FROM usuarios WHERE nombreusuario=:nombreusuario) 
                       ORDER BY usuarios.nombreusuario ASC
                       LIMIT $desde,$cantidad";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":nombreusuario"=>$nombreusuario));
                $arrayResultado= $resultado->fetchAll(PDO::FETCH_OBJ);
                $resultado->closeCursor();
                return $arrayResultado;

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        } 

        public function cantUsuariosSeguidos($nombreusuario){
            try{

                $sql="SELECT id
                      FROM usuarios
                      WHERE usuarios.id IN 
                      (SELECT siguiendo.usuarioseguido_id FROM siguiendo WHERE siguiendo.usuarios_id IN 
                      (SELECT id FROM usuarios WHERE nombreusuario=:nombreusuario))";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":nombreusuario"=>$nombreusuario));
                $cantRegistros= $resultado->rowCount();
                $resultado->closeCursor();
                return $cantRegistros;

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

    }
?>