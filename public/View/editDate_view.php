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
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Amatic+SC:wght@700&family=Anton&family=Caveat:wght@400;700&family=Girassol&family=Josefin+Sans:ital,wght@1,600&family=Lobster&family=Merriweather:ital,wght@0,900;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
        rel="stylesheet" />
    <!-- ICONOS -->
    <script src="https://kit.fontawesome.com/3f9cdd4385.js" crossorigin="anonymous"></script>

    <!-- ESTILOS -->
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/PrincipalPage/estilosPrincipalPage.css" />
    <link rel="stylesheet" href="css/editDate/editDate.css" />
</head>

<body>
    <?php 

    session_start();
    if(!isset($_SESSION['usuario'])){
        header('Location: index.php');
    }

    ?>
    <!-- Buscador lateral de perfiles -->
    <div class="buscador" id="buscador">
        <div class="contenedor-busqueda">
            <form class="boton-busqueda">
                <!-- ICONO BUSQUEDA -->
                <i class="fas fa-search"></i>
                <!-- INPUT DE BUSQUEDA -->
                <input type="search" placeholder="Buscar..." />
            </form>

            <div class="resultado-busqueda">
                <div class="usuario">
                    <div class="contenedor-nombre">
                        <a href="#">
                            <div class="nombre">Pepeto</div>
                            <div class="apellido">Pepeto</div>
                        </a>
                    </div>
                    <div class="username">@pepeto154</div>
                    <div class="contenedor-botonFollow">
                        <button class="follow">Seguir</button>
                    </div>
                </div>
                <div class="usuario">
                    <div class="contenedor-nombre">
                        <a href="#">
                            <div class="nombre">Erwin</div>
                            <div class="apellido">Apellido</div>
                        </a>
                    </div>
                    <div class="username">@erwin455</div>
                    <div class="contenedor-botonFollow">
                        <button class="follow">Seguir</button>
                    </div>
                </div>
                <div class="usuario">
                    <div class="contenedor-nombre">
                        <a href="#">
                            <div class="nombre">Destiney</div>
                            <div class="apellido">Apellido</div>
                        </a>
                    </div>
                    <div class="username">@destiner474a</div>
                    <div class="contenedor-botonFollow">
                        <button class="follow">Seguir</button>
                    </div>
                </div>
                <div class="usuario">
                    <div class="contenedor-nombre">
                        <a href="#">
                            <div class="nombre">Milton</div>
                            <div class="apellido">Apellido</div>
                        </a>
                    </div>
                    <div class="username">@miltonsey87M</div>
                    <div class="contenedor-botonFollow">
                        <button class="follow">Seguir</button>
                    </div>
                </div>
                <div class="usuario">
                    <div class="contenedor-nombre">
                        <a href="#">
                            <div class="nombre">Cassey</div>
                            <div class="apellido">Apellido</div>
                        </a>
                    </div>
                    <div class="username">@cassyMA24</div>
                    <div class="contenedor-botonFollow">
                        <button class="follow">Seguir</button>
                    </div>
                </div>
                <div class="usuario">
                    <div class="contenedor-nombre">
                        <a href="#">
                            <div class="nombre">Matuidiwe</div>
                            <div class="apellido">Apellido</div>
                        </a>
                    </div>
                    <div class="username">@cassyMA24</div>
                    <div class="contenedor-botonFollow">
                        <button class="follow">Seguir</button>
                    </div>
                </div>
                <div class="usuario">
                    <div class="contenedor-nombre">
                        <a href="#">
                            <div class="nombre">Pepeto</div>
                            <div class="apellido">Apellido</div>
                        </a>
                    </div>
                    <div class="username">@cassyMA24</div>
                    <div class="contenedor-botonFollow">
                        <button class="follow">Seguir</button>
                    </div>
                </div>
                <div class="usuario">
                    <div class="contenedor-nombre">
                        <a href="#">
                            <div class="nombre">Pepeto</div>
                            <div class="apellido">Apellido</div>
                        </a>
                    </div>
                    <div class="username">@cassyMA24</div>
                    <div class="contenedor-botonFollow">
                        <button class="follow">Seguir</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Barra lateral con menu -->
    <nav class="menu">
        <div class="lineas" id="openMenu">
            <i class="fas fa-align-justify"></i>
        </div>
        <div class="search" id="openSearch">
            <i class="fas fa-search"></i>
        </div>
        <div class="logo">
            <img src="assets/media/img/logo.png" alt="Logotipo de la red social" />
        </div>
        <div class="menu-lista" id="menu">
            <ul>
                <li class="opciones">
                    <a href="InicialPage.php"><i class="icono fas fa-home"></i>Inicio</a>
                </li>
                <li class="opciones">
                    <a href="MyPerfil.php"><i class="icono fas fa-portrait"></i>Perfil</a>
                </li>
                <!-- <li class="opciones">
                        <a href="#"
                            ><i class="icono far fa-comment-dots invertir"></i
                            >Publicar</a
                        >
                    </li> -->
                <li class="opciones" id="btn__config">
                    <a href="#">
                        <i class="icono fas fa-tools"></i>Opciones<i class="icono-derecha fas fa-chevron-down"></i></a>
                    <ul class="submenu slideUp">
                        <li class="opciones">
                            <a href="editDate.php"> Editar Perfil</a>
                        </li>
                        <li class="opciones">
                            <a href="Model/cerrarsesion.php"> Cerrar Sesión </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>

    <!-- PARTE CENTRLA DE LA PAGINA -->
    <div class="central">
        <div class="contenido">
            <div class="titulo">
                Editar datos personales
            </div>

            <div class="editar" id="contenido-edicion">
                <form class="datos-generales" id="form-datos-generales">
                    <div class="container-dualDate">
                        <div class="containers focus">
                            <div class="i">
                                <i class="fas fa-signature"></i>
                            </div>
                            <div>
                                <label for="first-name">Nombre</label>
                                <input class="input" type="text" name="first-name" id="basic_datos_firstName"
                                    value="ACA VA EL NOMBRE PRECARGADO" />
                            </div>
                        </div>
                        <div class="containers focus">
                            <div class="i">
                                <i class="fas fa-signature"></i>
                            </div>
                            <div>
                                <label for="last-name">Apellido</label>
                                <input class="input" type="text" name="last-name" id="basic_datos_lastName"
                                    value="ACA VA EL APELLIDO PRECARGADO" />
                            </div>
                        </div>
                    </div>
                    <div class="container-dualDate">
                        <div class="container-img">
                            <div class="container-imagen-prev">
                                <i class="fas fa-camera" id="iconoSubirImagen"></i>

                                <input class="inputImg" type="file" name="img_profile" id="inputImg" />
                            </div>
                        </div>
                        <div class="containers focus">
                            <div class="i">
                                <i class="fas fa-envelope"></i>
                            </div>

                            <div>
                                <label for="email">Correo electrónico</label>
                                <input type="email" class="input" name="email" id="basic_datos_email" novalidate
                                    value="davidscoffield@gmail.com" />
                            </div>
                        </div>
                    </div>
                    <div class="container-dual">
                        <!-- <div class="container-button">
                                <input
                                    type="reset"
                                    value="Vaciar"
                                    class="btn"
                                    id="resetDatosGenerales"
                                />
                            </div> -->
                        <div class="container-button">
                            <input type="submit" name="btn-submit" value="Enviar" class="btn"
                                id="submitDatosGenerales" />
                        </div>
                    </div>
                </form>
                <form class="password" id="form_password">
                    <div class="container-individual">
                        <div class="containers">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <label for="password">Contraseña actual</label>
                                <input class="input" type="password" name="password" id="actual_password" />
                            </div>
                        </div>
                    </div>
                    <div class="container-dualDate">
                        <div class="containers">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <label for="password">Nueva contraseña</label>
                                <input class="input" type="password" name="password" id="new_password" />
                            </div>
                        </div>
                        <div class="containers">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <label for="repeatPassword">Repita la contraseña</label>
                                <input class="input" type="password" name="repeatPassword" id="new_passwordRepeat" />
                            </div>
                        </div>
                    </div>
                    <div class="container-dual">
                        <!-- <div class="container-button">
                                <input
                                    type="reset"
                                    value="Vaciar"
                                    class="btn"
                                    id="resetPassword"
                                />
                            </div> -->

                        <div class="container-button">
                            <input type="submit" name="btn-submit" value="Enviar" class="btn" id="submitPassword" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

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
    <script src="js/index/redesSocialesFooter.js"></script>
    <script src="js/PaginaPrincipal/menu.js"></script>
    <script src="js/PaginaPrincipal/buscador.js"></script>
    <script src="js/PaginaPrincipal/followUnfollow.js"></script>
    <script src="js/editDate/editForm.js"></script>
    <script src="js/editDate/validacionesCampos.js"></script>
    <!-- <script src="js/PaginaPrincipal/publicacion.js"></script> -->
</body>

</html>