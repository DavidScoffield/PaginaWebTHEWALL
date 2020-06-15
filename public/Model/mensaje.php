<?php 

require_once("BD.php"); 
require_once("Model/infoPersonal.php"); 

    class Mensajes extends Conexion{

        public function  __construct(){
            parent::__construct();
        }

        public function cantMensajesPropios($nombreusuario)
        {
            $sql="SELECT * FROM mensaje WHERE usuarios_id IN (SELECT id FROM usuarios WHERE nombreusuario=:nombreusuario)";
            $resultado=$this->conexion_db->prepare($sql);
            $resultado->execute(array(":nombreusuario"=>$nombreusuario));
            $cantRegistros= $resultado->rowCount();
            $resultado->closeCursor();
            return $cantRegistros;

        }

        public function getMensajesPropios($nombreusuario,$desde,$cantidad)
        {
            // $sql="SELECT * FROM mensaje WHERE usuarios_id IN (SELECT id FROM usuarios WHERE nombreusuario=:nombreusuario) ORDER BY fechayhora DESC LIMIT $desde,$cantidad";
            $sql= "SELECT mensaje.*, COUNT(me_gusta.mensaje_id) as cant_me_gusta 
                   FROM mensaje 
                   LEFT JOIN me_gusta ON mensaje.id=me_gusta.mensaje_id  
                   WHERE mensaje.usuarios_id IN (SELECT id FROM usuarios WHERE nombreusuario=:nombreusuario)
                   GROUP BY mensaje.id
                   ORDER BY fechayhora DESC
                   LIMIT $desde,$cantidad";
            $resultado=$this->conexion_db->prepare($sql);
            $resultado->execute(array(":nombreusuario"=>$nombreusuario));
            $arrayResultado= $resultado->fetchAll(PDO::FETCH_ASSOC);
            $resultado->closeCursor();
            return $arrayResultado;
        } 


        public function convertirImgBLOB($tamanioImg, $temporalImg, $tipoImg ){

            try{
                $permitidos = array("image/jpg", "image/jpeg", "image/gif", "image/png");
                $limite_by = 16384;
                if (in_array($tipoImg, $permitidos) && ($tamanioImg <= $limite_by * 1024)){
                    // $fp = fopen($temporalImg, 'r');
                    // $archivoBit = fread($fp, $tamanioImg);
                    // fclose($fp);
                    $archivoBit = file_get_contents($temporalImg);
                    // $archivoBit= addslashes($archivoBit);
                    return $archivoBit;
                }else{
                    echo "NO ES UN TIPO PERMITIDO";
                }
            }catch(Exception $e){
                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            }
        }

        public function publicarMsj($msj,$img,$img_type,$fecha_hora,$nombre_usuario){
            try {

                $datosPersonalesObj= new DatosPersonales();
                $user_id= $datosPersonalesObj->getId($nombre_usuario);
                if(($img != null) && ($msj != null)){

                    $sql="INSERT INTO mensaje (texto, imagen_contenido, imagen_tipo, fechayhora, usuarios_id) VALUES (:msj, :img_contenido, :img_tipo, :fyh, :id)";
                    $resultado= $this->conexion_db->prepare($sql);
                    $resultado->execute(array(":msj"=>$msj, ":img_contenido"=>$img, ":img_tipo"=>$img_type, ":fyh"=>$fecha_hora, ":id"=>$user_id));
                
                }else{
                    if($msj != null){

                        $sql="INSERT INTO mensaje (texto, fechayhora, usuarios_id) VALUES (:msj, :fyh, :id)";
                        $resultado= $this->conexion_db->prepare($sql);
                        $resultado->execute(array(":msj"=>$msj, ":fyh"=>$fecha_hora, ":id"=>$user_id));

                    }else{

                        $sql="INSERT INTO mensaje (imagen_contenido, imagen_tipo, fechayhora, usuarios_id) VALUES ( :img_contenido, :img_tipo, :fyh, :id)";
                        $resultado= $this->conexion_db->prepare($sql);
                        $resultado->execute(array(":img_contenido"=>$img, ":img_tipo"=>$img_type, ":fyh"=>$fecha_hora, ":id"=>$user_id));

                    }
                }
                $resultado->closeCursor();

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        

    }

?>