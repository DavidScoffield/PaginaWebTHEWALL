<?php 

    require_once("clasesPHP/ClassUsuario.php"); 
    require_once("clasesPHP/ClassLoginRegister.php"); 

    class DatosPersonales extends Registro{

        public function  __construct(){
            parent::__construct();
        }
        
        public function getDatosPersonales($nombreUsuario){
            try{

                $sql= "SELECT * FROM usuarios WHERE nombreusuario=:nombreusuario";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":nombreusuario"=>$nombreUsuario));
                $datosPersonales=$resultado->fetch(PDO::FETCH_ASSOC);
                if($resultado->rowCount()==1){
                    $resultado->closeCursor();
                    return $datosPersonales;
                }else{
                    die("ERROR, HAY MAS DE UN USUARIO CON EL MISMO NOMBRE DE USUARIO");         //NUNCA DEBERIA SUCEDER
                }
            

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        public function getDatosPersonalesBasicos($nombreUsuario){
            try{

                $sql= "SELECT nombre, apellido, email FROM usuarios WHERE nombreusuario=:nombreusuario";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":nombreusuario"=>$nombreUsuario));
                $datosPersonales=$resultado->fetch(PDO::FETCH_ASSOC);
                if($resultado->rowCount()==1){
                    $resultado->closeCursor();
                    return $datosPersonales;
                }else{
                    die("ERROR, HAY MAS DE UN USUARIO CON EL MISMO NOMBRE DE USUARIO");         //NUNCA DEBERIA SUCEDER
                }
            

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }


        public function getId($nombreUsuario){
            try{
                $sql= "SELECT id FROM usuarios WHERE nombreusuario=:nombreusuario";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":nombreusuario"=>$nombreUsuario));
                $datosPersonales=$resultado->fetch(PDO::FETCH_ASSOC);
                if($resultado->rowCount()==1){
                    return $datosPersonales['id'];
                }else{
                    die("ERROR, HAY MAS DE UN USUARIO CON EL MISMO NOMBRE DE USUARIO");         //NUNCA DEBERIA SUCEDER
                }
            

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        public function updateDatosPersonales(Usuario $datosPersonales){

            try {

                if($datosPersonales->getImg() == null){
                    $sql="UPDATE usuarios SET nombre=:nombre, apellido=:apellido, email=:email WHERE nombreusuario=:nombreusuario";
                    $resultado= $this->conexion_db->prepare($sql);
                    $resultado->execute(array(":apellido"=>$datosPersonales->getApellido(), ":nombre"=>$datosPersonales->getNombre(), ":email"=>$datosPersonales->getEmail(), ":nombreusuario"=>$datosPersonales->getNombreUsuario()));
                
                }else{

                    $sql="UPDATE usuarios SET nombre=:nombre, apellido=:apellido, email=:email, foto_contenido=:fotoContenido, foto_tipo=:fotoTipo WHERE nombreusuario=:nombreusuario";
                    $resultado= $this->conexion_db->prepare($sql);
                    $resultado->execute(array(":apellido"=>$datosPersonales->getApellido(), ":nombre"=>$datosPersonales->getNombre(), ":email"=>$datosPersonales->getEmail(), ":nombreusuario"=>$datosPersonales->getNombreUsuario(), ":fotoContenido"=>$datosPersonales->getImg(), ":fotoTipo"=>$datosPersonales->getImgType()));

                }
                $resultado->closeCursor();

                return ($resultado->rowCount()>0);

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }
        }

        public function devolverContrasenia(string $nombreUsuario)
        {
            try{

                $sql= "SELECT contrasenia FROM usuarios WHERE nombreusuario=:nombreusuario";
                $resultado=$this->conexion_db->prepare($sql);
                $resultado->execute(array(":nombreusuario"=>$nombreUsuario));
                if($resultado->rowCount()>0){
                    $contrasenia=$resultado->fetch(PDO::FETCH_ASSOC);
                    return $contrasenia;
                }else{
                    echo "NO EXISTE CONTRASEÑA, IMPOSIBLE";             //ES IMPOSIBLE QUE NO HAYA UNA CONTRASEÑA EN LA BASE DE DATOS PARA EL USUARIO DETERMINADO
                }

            }catch(Exception $e){
                
                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
                
            }
        }


        public function contraseñaCorrecta(string $contrasenia, string $nombreUsuario){
            try{

                $contraseniaEnBD=$this->devolverContrasenia($nombreUsuario);
                $estado=$contrasenia==$contraseniaEnBD['contrasenia'];
                return $estado;

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }

        }

        public function updatePassword($newContrasenia, $nombreUsuario){
            
            try {

                $sql="UPDATE usuarios SET contrasenia=:contrasenia WHERE nombreusuario=:nombreusuario";
                $resultado= $this->conexion_db->prepare($sql);
                $resultado->execute(array(":contrasenia"=>$newContrasenia, ":nombreusuario"=>$nombreUsuario));
                
                $actualizada=($resultado->rowCount()>0);
                $resultado->closeCursor();
                return $actualizada;

            }catch(Exception $e){

                die("Error: " . $e->getMessage() . "</br>" . "En la linea: " . $e->getLine() . "</br>" . "En el directorio: " . $e->getFile());
            
            }

        }


    }
?>