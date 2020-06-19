<?php 

    require_once("../BD.php"); 

    class MeGusta extends Conexion{

        public function  __construct(){
            parent::__construct();
        }
        

        public function diMeGusta($idPersonal, $idMensaje){
            try{

                $sql= "SELECT id FROM me_gusta WHERE usuarios_id=:usuario_id AND mensaje_id=:idMensaje";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":usuario_id"=>$idPersonal,":idMensaje"=>$idMensaje));
                if($resultado->rowCount()>0){
                    $idMeGusta=$resultado->fetch(PDO::FETCH_ASSOC);
                }else{
                    $idMeGusta=["id"=>-1];
                }

                $resultado->closeCursor();
                
                return $idMeGusta;            

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }


        public function like($idPersonal, $idMensaje){
            try{

                $sql= "INSERT INTO me_gusta (usuarios_id, mensaje_id)
                       VALUES (:idPersonal,:idMensaje)";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":idPersonal"=>$idPersonal,":idMensaje"=>$idMensaje));
                $resultadoOp= ($resultado->rowCount()>0);
                
                $resultado->closeCursor();
                
                return $resultadoOp;            

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        public function dislike($idMeGusta){ 
            try{

                $sql= "DELETE FROM me_gusta WHERE id=:idMeGusta";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":idMeGusta"=>$idMeGusta));
                $resultadoOp= ($resultado->rowCount()>0);
                
                $resultado->closeCursor();
                
                return $resultadoOp;           

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        public function cantMeGusta($idMensaje){
            try{

                $sql= "SELECT COUNT(mensaje_id) as cant_me_gusta FROM me_gusta WHERE mensaje_id=:idMensaje";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":idMensaje"=>$idMensaje));

                $registro= $resultado->fetch(PDO::FETCH_ASSOC);
                $cantMeGusta= $registro["cant_me_gusta"];

                $resultado->closeCursor();
                
                return $cantMeGusta;           

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        public function eliminarMeGustasDelMensaje($idMensaje){
            try{

                $sql= "DELETE FROM me_gusta WHERE mensaje_id=:idMensaje";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":idMensaje"=>$idMensaje));

                $resultado->closeCursor();                          

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }


    }
?>