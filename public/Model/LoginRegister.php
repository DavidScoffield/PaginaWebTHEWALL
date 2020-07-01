<?php 

    require_once("BD.php"); 

    class Registro extends Conexion{

        public function  __construct(){
            parent::__construct();
        }

        public function nombreUsuarioExiste(string $nombreUsuario){
            try{

                $sql= "SELECT * FROM usuarios WHERE nombreusuario=:nombreuser";
                $sentencia= $this->conexion_db->prepare($sql);
                $sentencia->execute(array(":nombreuser"=>$nombreUsuario));
                $resultado= $sentencia->fetchAll(PDO::FETCH_ASSOC);
                $sentencia->closeCursor();
                if(empty($resultado)){
                    return false;
                }else{
                    return true;
                }
            }catch(Exception $e){
                
                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
                
            }
        }

        public function convertirImgBLOB($tamanioImg, $temporalImg, $tipoImg ){
            try{
                $permitidos = array("image/jpg", "image/jpeg", "image/gif", "image/png");
                // $limite_kb = 16384;
                // if (in_array($_FILES['imagen']['type'], $permitidos) && $_FILES['imagen']['size'] <= $limite_kb * 1024){
                if (in_array($tipoImg, $permitidos)){
                    $fp = fopen($temporalImg, 'rb');
                    $archivoBit = fread($fp, $tamanioImg);
                    $archivoBit = addslashes($archivoBit);
                    fclose($fp);
                    return $archivoBit;
                }else{
                    echo "NO ES UN TIPO PERMITIDO";
                }
            }catch(Exception $e){
                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            }
        }
        
        public function registrarUsuario(Usuario $objUsuario){
            try{
                
                $sql= "INSERT INTO usuarios (apellido, nombre, email, nombreusuario, contrasenia, foto_contenido, foto_tipo) VALUES (:apellido, :nombre, :email, :nombreusuario, :contrasenia, :fotoContenido, :fotoTipo)";
                $resultado= $this->conexion_db->prepare($sql);
                $resultado->execute(array(":apellido"=>$objUsuario->getApellido(), ":nombre"=>$objUsuario->getNombre(), ":email"=>$objUsuario->getEmail(), ":nombreusuario"=>$objUsuario->getNombreUsuario(), ":contrasenia"=>$objUsuario->getContrasenia(), ":fotoContenido"=>$objUsuario->getImg(), ":fotoTipo"=>$objUsuario->getImgType()));
                $resultado->closeCursor();

            }catch(Exception $e){
               die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            }
        }

    }

    class Login extends Conexion{

        public function  __construct(){
            parent::__construct();
        }

        public function Logearse(UsuarioLogIn $objUsuario ){
            try{

                 $sql= "SELECT * FROM usuarios WHERE nombreusuario=:nombreusuario AND contrasenia=:contrasenia";
                 $resultado=$this->conexion_db->prepare($sql);
                 $resultado->execute(array(":nombreusuario"=>$objUsuario->getNombreUsuario(),":contrasenia"=>$objUsuario->getContrasenia()));
                 $numero_registros_afectados= $resultado->rowCount();
                 return ($numero_registros_afectados!=0);   //devuelve true si encontro un usuario con los datos pasados, y false si no lo encuentra

            }catch(Exception $e){
                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            }

        }

    }
?>