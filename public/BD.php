<?php 
    require 'Model/config.php';
    
    class Conexion{ 
        protected $conexion_db;

        public function __construct(){
            try{
            
                $this->conexion_db= new PDO("mysql:host=". DB_HOST. "; dbname=". DB_NOMBRE ."","". DB_USUARIO ."","". DB_CONTRASEÑA ."");
                $this->conexion_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->conexion_db->exec("SET CHARACTER SET ". DB_CHARSET ."");
                return $this->conexion_db; 
            
            }catch(Exception $e){
            
                echo "La linea de error es: " . $e->getLine() ."</br>";
                echo "El error es: " . $e->getMessage();
            
            }
        }

    }
?>