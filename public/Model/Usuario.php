<?php 

    class Usuario{

        protected $email;
        protected $nombre;
        protected $apellido;
        protected $nombre_usuario;
        protected $contrasenia;
        protected $img;
        protected $img_type;

        public function __construct($email, $nombre, $apellido, $nombre_usuario, $contrasenia, $img, $img_type){

            $this->email=$email;
            $this->nombre=$nombre;
            $this->apellido=$apellido;
            $this->nombre_usuario=$nombre_usuario;
            $this->contrasenia=$contrasenia;
            $this->img=$img;
            $this->img_type=$img_type;

        }
        // getters
        public function getEmail(){
            return $this->email;
        }
        public function getNombre(){
            return $this->nombre;
        }
        public function getApellido(){
            return $this->apellido;
        }
        public function getNombreUsuario(){
            return $this->nombre_usuario;
        }
        public function getContrasenia(){
            return $this->contrasenia;
        }
        public function getImg(){
            return $this->img;
        }
        public function getImgType(){
            return $this->img_type;
        }

        // setters
        public function setEmail($email){
            $this->email=$email;
        }
        public function setNombre($nombre){
            $this->nombre=$nombre;
        }
        public function setApellido($apellido){
            $this->apellido=$apellido;
        }
        public function setNombreUsuario($nombre_usuario){
            $this->nombre_usuario=$nombre_usuario;
        }
        public function setContrasenia($contrasenia){
            $this->contrasenia=$contrasenia;
        }
        public function setImg($img){
            $this->img=$img;
        }
        public function setImgType($img_type){
            $this->img_type=$img_type;
        }


    }

    class UsuarioLogIn{

        protected $nombre_usuario;
        protected $contrasenia;


        public function __construct($nombre_usuario, $contrasenia){

            $this->nombre_usuario=$nombre_usuario;
            $this->contrasenia=$contrasenia;
        }
        // getters

        public function getNombreUsuario(){
            return $this->nombre_usuario;
        }
        public function getContrasenia(){
            return $this->contrasenia;
        }
        // setters
        public function setNombreUsuario($nombre_usuario){
            $this->nombre_usuario=$nombre_usuario;
        }
        public function setContrasenia($contrasenia){
            $this->contrasenia=$contrasenia;
        }
    }


?>