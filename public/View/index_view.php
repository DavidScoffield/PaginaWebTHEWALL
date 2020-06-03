<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>THE WALL</title>
    <!-- LOGO DE LA PAGINA EN EL TITLE -->
    <link rel="icon" href="assets/media/img/icono.ico" />

    <!-- FUENTES DE TEXTO -->
    <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Amatic+SC:wght@700&family=Anton&family=Caveat:wght@400;700&family=Girassol&family=Josefin+Sans:ital,wght@1,600&family=Lobster&family=Merriweather:ital,wght@1,700&family=Poppins:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
        rel="stylesheet" />
    <!-- ESTILOS CSS/SCSS -->
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/index/estilosIndex.css" />

    <!-- ICONOS -->
    <script src="https://kit.fontawesome.com/3f9cdd4385.js" crossorigin="anonymous"></script>
</head>

<body>
    <!-- titulo  -->
    <header class="header">
        <h1 class="titulo">
           THE WALL <span class="titulo_pie">La nueva red social</span>
        </h1>
    </header>

    <!-- frase lateral izquierda-->
    <div class="aside1">
        <p class="frase">Entérate de lo que tus conocidos publican</p>
    </div>

    <!-- parte central de la pagina donde se elige si iniciar sesion o registrarse -->
    <div class="center">
        <div class="box-login">
            <div class="bienvenida">Bienvenido a THE WALL</div>
            <button id="login">Iniciar Sesion</button>
            <button id="register">Registrarse</button>
        </div>
    </div>

    <!-- frase lateral derecha -->
    <div class="aside2">
        <p class="frase">Busca y sigue a quien quieras</p>
    </div>

    <!-- ventana modal de inicio de sesion  -->
    <div class="bg-modal" id="bg-modal-LogIn">
        <div class="window_modal LogIn" id="window-modal">
            <div class="close" id="closeLogIn">+</div>

            <div class="encabezado">
                <img src="assets/media/img/logo.png" alt="Logo de la pagina, THE WALL la nueva red social" />
                <div class="titulo">Iniciar sesion</div>
            </div>

            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" class="form" id="formulario_logIn">
                <div class="containers contenedor-input">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div>
                        <label for="user">Nombre usuario</label>
                        <input type="text" class="input" name="user_login" id="login_user" />
                    </div>
                </div>
                <div class="containers contenedor-input">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div>
                        <label for="password">Contraseña</label>
                        <input class="input" type="password" name="password_login" id="login_password" />
                    </div>
                </div>
                <div class="container-dual">
                    <input type="submit" name="btn_submit_login" id="btn_submitLogIn" value="Enviar" class="btn" />
                    <input type="reset" value="Vaciar" class="btn" id="resetLogIn" />
                </div>
            </form>
            <div class="cambiar_opcion" id="cambiar_opcion_LogIn">
                ¿No tenes cuenta? Registrarse
            </div>
        </div>
    </div>

    <!-- modal de registro -->
    <?php if(isset($usuarioExistente) && $usuarioExistente=true): ?>            <!-- si el nombre de usuario ingresado ya existia se dirije a la misma pagina y se inserta un msj de error en nombre de usuario  -->
        <div class="bg-modal" id="bg-modal-register" style="display: flex;" >
            <div class="window_modal" id="window-modal-register">
                <div class="close" id="closeRegister">+</div>
    
                <div class="encabezado">
                    <img src="assets/media/img/logo.png" alt="Logo de la pagina, THE WALL la nueva red social" />
                    <div class="titulo">Registrarse</div>
                </div>
    
                <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" class="form" id="formulario_registro" enctype="multipart/form-data">
                    <input type="hidden" id="nombreUsuarioRepetido">
                    <div class="containers contenedor-input focus valid">
    
                        <div class="i">
                            <i class="fas fa-envelope"></i>
                        </div>
    
                        <div>
                            <label for="register_email">Correo electrónico</label>
                            <input type="email" class="input" name="email_register" id="register_email" novalidate value="<?= $email ?>"/>
                        </div>
                    </div>
    
                    <div class="containers contenedor-input focus valid">
                        <div class="i">
                            <i class="fas fa-signature"></i>
                        </div>
                        <div>
                            <label for="register_firstName">Nombre</label>
                            <input class="input" type="text" name="first_name_register" id="register_firstName" value="<?= $nombre ?>"/>
                        </div>
                    </div>
                    <div class="containers contenedor-input focus valid">
                        <div class="i">
                            <i class="fas fa-signature"></i>
                        </div>
                        <div>
                            <label for="register_lastName">Apellido</label>
                            <input class="input" type="text" name="last_name_register" id="register_lastName" value="<?= $apellido ?>"/>
                        </div>
                    </div>
    
                    <div class="containers contenedor-input focus error">
                        <div class="i">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <label for="register_user">Nombre usuario</label>
                            <input type="text" class="input" name="user_register" id="register_user" value="<?= $nombre_usuario ?>"/>
                        </div>
                        <!-- Se debe cargar nuevamente la imagen si el nombre de usuario fue repetido -->
                        <div class="contenedor-msj-error">
                            <p class="msj-error">El nombre de usuario ya existe</p>
                        </div>
                    </div>
    
                    <div class="containers contenedor-input focus valid">
                        <div class="i">
                            <i class="fas fa-lock"></i>
                        </div>
                        <div>
                            <label for="register_password">Contraseña</label>
                            <input class="input" type="password" name="password_register" id="register_password"  value="<?= $contrasenia ?>" />
                        </div>
                    </div>
                    <div class="containers contenedor-input focus valid">
                        <div class="i">
                            <i class="fas fa-lock"></i>
                        </div>
                        <div>
                            <label for="register_RepeatPassword">Repita la contraseña</label>
                            <input class="input" type="password" name="repeatPassword_register" id="register_RepeatPassword"  value="<?= $contrasenia ?>"/>
                        </div>
                    </div>
    
                    <div class="contenedor-img contenedor-input">
                        <div class="container-imagen-prev error">
                            <i class="fas fa-camera" id="iconoSubirImagen"></i>
    
                            <input class="inputImg" type="file" name="img_profile_register" id="inputImg" />
                        </div>
                        <!-- Se debe cargar nuevamente la imagen si el nombre de usuario fue repetido -->
                        <div class="contenedor-msj-error">
                            <p class="msj-error">Ingrese la foto nuevamente</p>
                        </div>
                    </div>
    
                    <div class="container-dual">
                        <input type="submit" name="btn_submit_register" id="btn_submitRegister" value="Enviar" class="btn" />
                        <input type="reset" value="Vaciar" class="btn" id="resetRegister" />
                    </div>
                </form>
    
                <div class="cambiar_opcion" id="cambiar_opcion_register">
                    ¿Ya estás registrado? Iniciar Sesión
                </div>
            </div>
        </div>

    <?php else: ?>
        <div class="bg-modal" id="bg-modal-register">
            <div class="window_modal" id="window-modal-register">
                <div class="close" id="closeRegister">+</div>
    
                <div class="encabezado">
                    <img src="assets/media/img/logo.png" alt="Logo de la pagina, THE WALL la nueva red social" />
                    <div class="titulo">Registrarse</div>
                </div>
    
                <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" class="form" id="formulario_registro" enctype="multipart/form-data">
                    <div class="containers contenedor-input">
    
                        <div class="i">
                            <i class="fas fa-envelope"></i>
                        </div>
    
                        <div>
                            <label for="register_email">Correo electrónico</label>
                            <input type="email" class="input" name="email_register" id="register_email" novalidate/>
                        </div>
                    </div>
    
                    <div class="containers contenedor-input">
                        <div class="i">
                            <i class="fas fa-signature"></i>
                        </div>
                        <div>
                            <label for="register_firstName">Nombre</label>
                            <input class="input" type="text" name="first_name_register" id="register_firstName" />
                        </div>
                    </div>
                    <div class="containers contenedor-input">
                        <div class="i">
                            <i class="fas fa-signature"></i>
                        </div>
                        <div>
                            <label for="register_lastName">Apellido</label>
                            <input class="input" type="text" name="last_name_register" id="register_lastName" />
                        </div>
                    </div>
    
                    <div class="containers contenedor-input">
                        <div class="i">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <label for="register_user">Nombre usuario</label>
                            <input type="text" class="input" name="user_register" id="register_user" />
                        </div>
                    </div>
    
                    <div class="containers contenedor-input">
                        <div class="i">
                            <i class="fas fa-lock"></i>
                        </div>
                        <div>
                            <label for="register_password">Contraseña</label>
                            <input class="input" type="password" name="password_register" id="register_password" />
                        </div>
                    </div>
                    <div class="containers contenedor-input">
                        <div class="i">
                            <i class="fas fa-lock"></i>
                        </div>
                        <div>
                            <label for="register_RepeatPassword">Repita la contraseña</label>
                            <input class="input" type="password" name="repeatPassword_register" id="register_RepeatPassword" />
                        </div>
                    </div>
    
                    <div class="contenedor-img contenedor-input">
                        <div class="container-imagen-prev">
                            <i class="fas fa-camera" id="iconoSubirImagen"></i>
    
                            <input class="inputImg" type="file" name="img_profile_register" id="inputImg" />
                        </div>
                    </div>
    
                    <div class="container-dual">
                        <input type="submit" name="btn_submit_register" id="btn_submitRegister" value="Enviar" class="btn" />
                        <input type="reset" value="Vaciar" class="btn" id="resetRegister" />
                    </div>
                </form>
    
                <div class="cambiar_opcion" id="cambiar_opcion_register">
                    ¿Ya estás registrado? Iniciar Sesión
                </div>
            </div>
        </div>

    <?php endif; ?>

    <!-- footer -->
    <footer class="footer">
        <div class="titulo">
            <p>Diseñadores:</p>
        </div>
        <div class="creador">
            <p class="nombre">Scoffield David</p>
            <div class="iconos">
                <div class="facebook">
                    <i id="facebook__david" class="fab fa-facebook-square"></i>
                </div>
                <div class="instagram">
                    <i id="instagram__david" class="fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
        <div class="creador">
            <p class="nombre">Troncoso Luis Valentin</p>
            <div class="iconos">
                <div class="facebook">
                    <i id="facebook_luis" class="fab fa-facebook-square"></i>
                </div>
                <div class="instagram">
                    <i id="instagram__luis" class="fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    </footer>

    <!-- archivos javascrip -->
    <script src="js/index/redesSocialesFooter.js"></script>
    <script src="js/index/validaciones.js"></script>
    <script src="js/index/ventana-modal.js"></script>
</body>

</html>