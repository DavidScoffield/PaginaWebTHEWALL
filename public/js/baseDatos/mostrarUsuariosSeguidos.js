const contUsuarios = document.getElementById('lista_usuarios');

// FUNCION QUE DEVUELVE LOS MSJ DESDE EL ESPECIFICADO EN SUS PARAM
const getUsuariosSeguidos = async (inicio) => {
    let formData = new FormData();
    formData.append('username', nombreUsuario);
    formData.append('inicio', inicio);

    let resMensajes = await fetch('Model/usuariosSeguidos.php', {
        method: 'POST',
        body: formData,
    });

    let datos = await resMensajes.json(); //devuelve un arreglo [mensajes, cantMensajes]

    return datos;
};

//FUNCION ENCARGADA DE MOSTRAR LOS MSJ CON SU RESPECTIVA PAGINACION, INICIANDO EN EL NUMERO DE MSJ QUE SE LE PASA POR PARAM, CREA LA RESP PAGINACION
const actualizarUsuariosSeguidos = async (inicio) => {
    inicio = Number(inicio); //me aseguro de transformarlo a numero
    const contenedorListaUsuarios = document.getElementById('lista_usuarios');
    const arrayUsuariosSeguidos = Array.from(contenedorListaUsuarios.children);

    //CONSIGO EL ARRAY CON LOS DATOS DE LOS USUARIOS QUE SIGO
    datos = await getUsuariosSeguidos(inicio);

    //elimino del DOM los msj que habia para insertarlos actualizados
    arrayUsuariosSeguidos.forEach((usuario) => {
        contenedorListaUsuarios.removeChild(usuario);
    });

    //INSERTO LOS MSJ EN EL DOM
    const usuarios = datos[0];

    fragmento = document.createDocumentFragment();
    for (const usuario of usuarios) {
        let user = await crearUsuario(usuario);
        fragmento.append(user);
    }
    contenedorListaUsuarios.append(fragmento);

    //-----PAGINACION
    let cantMensajesTotales = datos[1];
    const regXpag = 10;
    let totalPaginas = Math.ceil(cantMensajesTotales / regXpag);

    if (totalPaginas > 1) {
        //en caso de haber mas de una pagina de msj crea los links de paginacion
        let paginacion = crearVistaPaginacion(inicio, totalPaginas, 'actualizarUsuariosSeguidos');
        contenedorListaUsuarios.append(paginacion);
    }
};

//FUNCION QUE CREA UN MSJ CON SU DETERMINADO FORMATO, CON LOS DATOS QUE SE LE PASA POR PARAMETRO
const crearUsuario = async (usuario) => {
    divUsuario = crearElemento('div', ['usuarioPerfil'], usuario.id);
    divContenedor = crearElemento('div', ['contenedor'], '');

    aHref = crearElemento('a', [], '');
    aHref.setAttribute('href', `userProfile.php?user=${usuario.nombreusuario}`);
    divContenedorDatos = crearElemento('div', ['contenedor-datos'], '');
    divContenedorImg = crearElemento('div', ['contenedor-img'], '');
    imgFotoPerfil = crearElemento('img', [], '');
    imgFotoPerfil.setAttribute(
        'src',
        `data:image/${usuario.foto_tipo};base64, ${usuario.foto_contenido}`
    );
    imgFotoPerfil.setAttribute('alt', 'Foto de perfil');
    divContenedorImg.append(imgFotoPerfil);
    divContenedorUsuario = crearElemento('div', ['contenedor-nombreUsuario'], '');
    pNombreUsuario = crearElemento('p', ['nombre-usuario'], '');
    pNombreUsuario.textContent = '@' + usuario.nombreusuario;
    divContenedorUsuario.append(pNombreUsuario);
    divContenedorDatos.append(divContenedorImg);
    divContenedorDatos.append(divContenedorUsuario);
    aHref.append(divContenedorDatos);
    divContenedor.append(aHref);

    divContenedorFollow = crearElemento('div', ['contenedor-botonFollow', 'unFollow'], '');
    buttonFollow = crearElemento('button', ['follow'], usuario.IDfollow);
    buttonFollow.textContent = 'No seguir';
    divContenedorFollow.append(buttonFollow);

    divContenedor.append(divContenedorFollow);

    divUsuario.append(divContenedor);
    return divUsuario;
};

//EVENTO CUANDO SE DESEA DEJAR DE SEGUIR A UNA PERSONA
contUsuarios.addEventListener('click', async (e) => {
    const elementClikeado = e.target;
    const arrayClases = Array.from(elementClikeado.classList);
    if ((elementClikeado.tagName = 'BUTTON') && arrayClases.includes('follow')) {
        let result = window.confirm('¿Quiere dejarlo de seguir?');
        if (result) {
            resultado = await unFollow(elementClikeado.id);
            if (resultado) {
                actualizarUsuariosSeguidos(1);
            }
        }
    }
});
