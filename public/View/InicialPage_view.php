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
        rel="stylesheet"
    />
    <!-- ICONOS -->
    <script
        src="https://kit.fontawesome.com/3f9cdd4385.js"
        crossorigin="anonymous"
    ></script>

    <!-- ESTILOS -->
    <link rel="stylesheet" href="css/normalize.css?t=1592197586458" />
    <link
        rel="stylesheet"
        href="css/PrincipalPage/estilosPrincipalPage.css?t=1592197586458"
    />
    <link rel="stylesheet" href="css/InicialPage/inicialPage.css?t=1592197586458" />
</head>
<body>

    <!-- nombre de usuario para trabajar con ajax -->
    <script type="text/javascript">
        const nombreUsuario= "<?= $_SESSION['usuario'];?>"
    </script>


    <!-- Buscador lateral de perfiles -->
    <div class="buscador" id="buscador">
        <div class="contenedor-busqueda">
            <form class="boton-busqueda" id="formBusqueda">
                <!-- ICONO BUSQUEDA -->
                <i class="fas fa-search"></i>
                <!-- INPUT DE BUSQUEDA -->
                <input type="search" placeholder="Buscar..." id="textoBusqueda" />
            </form>

            <div class="resultado-busqueda" id="resultado-busqueda">
                
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
            <img
                src="assets/media/img/logo.png"
                alt="Logotipo de la red social"
            />
        </div>
        <div class="menu-lista" id="menu">
            <ul>
                <li class="opciones">
                    <a href="InicialPage.php"
                        ><i class="icono fas fa-home"></i>Inicio</a
                    >
                </li>
                <li class="opciones">
                    <a href="MyPerfil.php"
                        ><i class="icono fas fa-portrait"></i>Perfil</a
                    >
                </li>
                <!-- <li class="opciones">
                    <a href="#"
                        ><i class="icono far fa-comment-dots invertir"></i
                        >Publicar</a
                    >
                </li> -->
                <li class="opciones" id="btn__config">
                    <a href="#">
                        <i class="icono fas fa-tools"></i>Opciones<i
                            class="icono-derecha fas fa-chevron-down"
                        ></i
                    ></a>
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
                Inicio
            </div>
            <div class="crear-msj">
                <form method="post" class="enviar-msj " enctype="multipart/form-data" id="crear_msj">
                    <div class="contenedor-uno">
                        <div class="contenedor-textarea">
                            <textarea name="msj" id="msj" maxlength="140" placeholder="¿En qué estás pensando?" ></textarea>
                        </div>
                    </div>
                    <div class="contenedor-dos">
                        <div class="container-imagen-prev" id="containerImg">
                            <i class="fas fa-camera" id="iconoSubirImagen"></i>

                            <input class="inputImg" type="file" name="img_profile" id="inputImg" accept="image/*" />
                        </div>
                        <input type="submit" class="btnPublicar" id="btn_publicar" value="Publicar" name="btnPublicarMsj" />
                    </div>
                </form>
            </div>

            <div class="opciones-menu-perfil">
                <div class="contenedor-opciones">
                    <ul class="lista">
                        <li class="opciones" id="btn_publicaciones">
                            Publicaciones mas recientes
                        </li>
                    </ul>
                </div>
            </div>
            <div class="publicaciones activeOption" id="publicaciones">
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
                    <i
                        id="facebook__david"
                        class="fab fa-facebook-square"
                    ></i>
                </div>
                <div class="instagram">
                    <i
                        id="instagram__david"
                        class="fab fa-instagram-square"
                    ></i>
                </div>
            </div>
        </div>
        <div class="creador">
            <p class="nombre">Troncoso Luis Valentin</p>
            <div class="iconos">
                <div class="facebook">
                    <i
                        id="facebook_luis"
                        class="fab fa-facebook-square"
                    ></i>
                </div>
                <div class="instagram">
                    <i
                        id="instagram__luis"
                        class="fab fa-instagram-square"
                    ></i>
                </div>
            </div>
        </div>
    </footer>
    <script src="js/baseDatos/mostrarMjsUsuariosSeguidos.js"></script>
    <script src="js/index/redesSocialesFooter.js?t=1592197586458"></script>
    <script src="js/PaginaPrincipal/menu.js?t=1592197586458"></script>
    <script src="js/PaginaPrincipal/buscador.js?t=1592197586458"></script>
    <script src="js/PaginaPrincipal/publicacion.js?t=1592197586458"></script>
    <script src="js/PaginaPrincipal/publicar.js?t=1592197586458"></script>
    <!-- <script src="js/PaginaPrincipal/followUnfollow.js?t=1592197586458"></script> -->
</body>
</html>
