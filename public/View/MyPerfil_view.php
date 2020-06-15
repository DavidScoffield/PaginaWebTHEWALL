<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>THE WALL</title>
    <!-- LOGO DE LA PAGINA EN EL TITLE -->
    <link rel="icon" href="assets/media/img/icono.ico" />

    <!-- FUENTES DE TEXTO -->
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Amatic+SC:wght@700&family=Anton&family=Caveat:wght@400;700&family=Girassol&family=Josefin+Sans:ital,wght@1,600&family=Lobster&family=Merriweather:ital,wght@0,900;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet" />
    <!-- ICONOS -->
    <script src="https://kit.fontawesome.com/3f9cdd4385.js" crossorigin="anonymous"></script>

    <!-- ESTILOS -->
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/PrincipalPage/estilosPrincipalPage.css" />
    <link rel="stylesheet" href="css/MyProfile/myProfile.css" />
</head>

<body>

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
                Mi pefil
            </div>
            <div class="perfil">
                <div class="contenedor">
                    <div class="contenedor-img">
                    <img src="data:image/<?= $datosPersonales['foto_tipo'] ?>;base64, <?php echo base64_encode($datosPersonales['foto_contenido']) ?>" alt="Foto de perfil" />
                        <!-- <img src="mostrarImagen.php?id=2" alt="Foto de perfil" /> -->
                    </div>
                    <div class="contenedor-datos">
                        <div class="contenedor-nombre">
                            <p class="nombre"><?= $datosPersonales['nombre'] ?></p>
                        </div>
                        <div class="contenedor-apellido">
                            <p class="apellido"><?= $datosPersonales['apellido'] ?></p>
                        </div>
                        <div class="contenedor-username">
                            <p class="username">@<?= $datosPersonales['nombreusuario'] ?></p>
                        </div>
                    </div>
                    <div class="contenedor-boton">
                        <a href="editDate.php" class="link">Editar Datos</a>
                    </div>
                </div>
            </div>
            <div class="crear-msj">
                <form action="<?php if(isset($_GET['pagina'])){
                                        echo $_SERVER['PHP_SELF']."?pagina=$pagina";
                                    }else{
                                        echo $_SERVER['PHP_SELF'];
                                    }?>" method="post" class="enviar-msj" enctype="multipart/form-data">
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
                            Mis publicaciones
                        </li>
                        <li class="opciones" id="btn_lista_usuarios">
                            Siguiendo
                        </li>
                    </ul>
                </div>
            </div>
            <div class="publicaciones activeOption" id="publicaciones">
                <?php foreach ($mensajes as $mensaje):  ?>
                <div class="publicacion" idMensaje="<?= $mensaje['id'] ?>">
                    <div class="contenedor">
                        <div class="contenedor-delete">
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="data:image/<?= $datosPersonales['foto_tipo'] ?>;base64, <?php echo base64_encode($datosPersonales['foto_contenido']) ?>" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @<?= $nombre_usuario ?>
                                </p>
                            </div>
                        </div>

                        <?php if($mensaje['texto']!=null): ?>
                            <div class="contenedor-texto">
                                <p class="texto">
                                    <?= $mensaje['texto']; ?>
                                </p>
                            </div>
                        <?php endif; ?>

                        <?php if($mensaje['imagen_contenido']!=null): ?>
                            <div class="contenedor-file">
                                <img src="data:image/<?= $mensaje['imagen_tipo'] ?>;base64, <?php echo base64_encode($mensaje['imagen_contenido']) ?>" alt="foto subida" />
                            </div>
                        <?php endif; ?>

                        <div class="contenedor-inferior">
                            <div class="contenedor-MG">
                                <i class="far fa-heart like"></i>
                                <p class="cantMG"><?= $mensaje['cant_me_gusta'] ?></p>
                            </div>
                            <div class="contenedor-FH">
                                <p class="fecha"><?= $mensaje['fechayhora'] ?></p>
                                <!-- <p class="fecha">18/05/2020</p> -->
                                <!-- <p class="hora">18:25</p> -->
                            </div>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
                <!-- paginacio -->
                <?php if($total_paginas>1): ?>
                    <div class="contenedor-paginacion">
                        <div class="contenedor-opciones">
                            <?php if($pagina==1 || $pagina==$total_paginas): ?>
                                <?php if($pagina==1): ?>
                                    <div class="opcion">
                                        <a href="?pagina=<?= $pagina+1 ?>">Siguiente</a>
                                    </div>
                                <?php else: ?>
                                    <div class="opcion">
                                        <a href="?pagina=<?= $pagina-1 ?>">Anterior</a>
                                    </div>  
                                <?php endif; ?>
                            <?php else: ?>
                                <div class="opcion">
                                    <a href="?pagina=<?= $pagina-1 ?>">Anterior</a>
                                </div>  
                                <div class="opcion">
                                    <a href="?pagina=<?= $pagina+1 ?>">Siguiente</a>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>

            <div class="lista-usuarios" id="lista_usuarios">
                <div class="usuarioPerfil">
                    <div class="contenedor">
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="assets/media/img/messiPerfil.jpg" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @PepeUsuario
                                </p>
                            </div>
                        </div>
                        <div class="contenedor-botonFollow unFollow">
                            <button class="follow">No seguir</button>
                        </div>
                    </div>
                </div>
                <div class="usuarioPerfil">
                    <div class="contenedor">
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/AlbertoCococi/128.jpg" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @Maria12Fer
                                </p>
                            </div>
                        </div>
                        <div class="contenedor-botonFollow unFollow">
                            <button class="follow">No seguir</button>
                        </div>
                    </div>
                </div>
                <div class="usuarioPerfil">
                    <div class="contenedor">
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @MrsJones
                                </p>
                            </div>
                        </div>
                        <div class="contenedor-botonFollow unFollow">
                            <button class="follow">No seguir</button>
                        </div>
                    </div>
                </div>
                <div class="usuarioPerfil">
                    <div class="contenedor">
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/michaelkoper/128.jpg" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @Cale212
                                </p>
                            </div>
                        </div>
                        <div class="contenedor-botonFollow unFollow">
                            <button class="follow">No seguir</button>
                        </div>
                    </div>
                </div>
                <div class="usuarioPerfil">
                    <div class="contenedor">
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @Kertzmann
                                </p>
                            </div>
                        </div>
                        <div class="contenedor-botonFollow unFollow">
                            <button class="follow">No seguir</button>
                        </div>
                    </div>
                </div>
                <div class="usuarioPerfil">
                    <div class="contenedor">
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/rikas/128.jpg" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @XzavierTromp
                                </p>
                            </div>
                        </div>
                        <div class="contenedor-botonFollow unFollow">
                            <button class="follow">No seguir</button>
                        </div>
                    </div>
                </div>
                <div class="usuarioPerfil">
                    <div class="contenedor">
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/m_kalibry/128.jpg" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @MrsBorer
                                </p>
                            </div>
                        </div>
                        <div class="contenedor-botonFollow unFollow">
                            <button class="follow">No seguir</button>
                        </div>
                    </div>
                </div>
                <div class="usuarioPerfil">
                    <div class="contenedor">
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/alterchuca/128.jpg" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @neuralSpinka
                                </p>
                            </div>
                        </div>
                        <div class="contenedor-botonFollow unFollow">
                            <button class="follow">No seguir</button>
                        </div>
                    </div>
                </div>
                <div class="usuarioPerfil">
                    <div class="contenedor">
                        <div class="contenedor-datos">
                            <div class="contenedor-img">
                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg" alt="Foto de perfil" />
                            </div>
                            <div class="contenedor-nombreUsuario">
                                <p class="nombre-usuario">
                                    @RossieCormier19
                                </p>
                            </div>
                        </div>
                        <div class="contenedor-botonFollow unFollow">
                            <button class="follow">No seguir</button>
                        </div>
                    </div>
                </div>
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
    <script src="js/PaginaPrincipal/publicacion.js"></script>
    <script src="js/MyProfile/deletePublicacion.js"></script>
    <script src="js/MyProfile/alternarSubmenu.js"></script>
    <script src="js/PaginaPrincipal/publicar.js"></script>
</body>

</html>