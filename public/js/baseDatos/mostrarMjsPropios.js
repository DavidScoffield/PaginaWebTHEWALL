// FUNCION QUE DEVUELVE LOS MSJ DESDE EL ESPECIFICADO EN SUS PARAM
const getMsjPropios = async (inicio)=>{
    let formData= new FormData()
    formData.append("username", nombreUsuario)
    formData.append("inicio", inicio)

    let resMensajes= await fetch('Model/mensajesPropios.php',{
        method: 'POST',
        body: formData
    })

    let datos = await resMensajes.json();                 //devuelve un arreglo [mensajes, cantMensajes]

    return datos;
}
    
//FUNCION ENCARGADA DE MOSTRAR LOS MSJ CON SU RESPECTIVA PAGINACION, INICIANDO EN EL NUMERO DE MSJ QUE SE LE PASA POR PARAM, CREA LA RESP PAGINACION
const actualizarMsjPropios=async(inicio)=>{
    inicio=Number(inicio)       //me aseguro de transformarlo a numero
    const contenedorPublicaciones= document.getElementById('publicaciones')
    const arrayPublicaciones= Array.from(contenedorPublicaciones.children);

    datos= await getMsjPropios(inicio);
    
    //elimino del DOM los msj que habia para insertarlos actualizados
    arrayPublicaciones.forEach(publicacion => {
        contenedorPublicaciones.removeChild(publicacion)
    });


    //INSERTO LOS MSJ EN EL DOM
    const mensajes= datos[0]
    
    fragmento= document.createDocumentFragment();
    for (const mensaje of mensajes) {
        let msj= await crearMensaje(mensaje);
        fragmento.append(msj)
        
    }
    contenedorPublicaciones.append(fragmento)    
    
    //-----PAGINACION
    let cantMensajesTotales= datos[1]
    const regXpag=10
    let totalPaginas=Math.ceil(cantMensajesTotales/regXpag);
    
    if(totalPaginas>1){                                                 //en caso de haber mas de una pagina de msj crea los links de paginacion
        let paginacion= crearVistaPaginacion(inicio,totalPaginas,"actualizarMsjPropios");
        publicaciones.append(paginacion)
    }

}


// CREA LOS LINKS PARA LA PAGINACION(siguiente-anterior)
const crearVistaPaginacion= (pagina,totalPaginas,funcionOnClick)=>{
    
    divContenedorPaginacion=crearElemento('div',['contenedor-paginacion'],'')
    divContenedorOpc=crearElemento('div',['contenedor-opciones'],'')
    
    if(pagina==1 || pagina==totalPaginas){                  //condicion para saber si estoy en la primer pag o el la ult
        divOpcion=crearElemento('div',['opcion'],'')
        a=crearElemento('a',[''],'')
        a.setAttribute("href", "javascript:void(0)")
    
        if(pagina==1){                                         //si estoy en la primer pag no creo el link a la anterior
            a.setAttribute('onclick', `${funcionOnClick}("${pagina+1}");` )
            a.textContent= "Siguiente"
            
        }else{                                                 //si estoy en la ult pag no creo el link a la siguiente    
            a.setAttribute('onclick', `${funcionOnClick}("${pagina-1}");`)
            a.textContent= "Anterior"

        }
        divOpcion.append(a)
        divContenedorOpc.append(divOpcion)

    }else{                                                      //crea siguiente y anterior
        
        divOpcion1=crearElemento('div',['opcion'],'')
        a1=crearElemento('a',[''],'')
        a1.setAttribute("href", "javascript:void(0)")
        a1.setAttribute('onclick', `${funcionOnClick}("${pagina-1}");`)
        a1.textContent= "Anterior"
        divOpcion1.append(a1)

        divOpcion2=crearElemento('div',['opcion'],'')
        a2=crearElemento('a',[''],'')
        a2.setAttribute("href", "javascript:void(0)")
        a2.setAttribute('onclick', `${funcionOnClick}("${pagina+1}");` )
        a2.textContent= "Siguiente"
        divOpcion2.append(a2)

        divContenedorOpc.append(divOpcion1)
        divContenedorOpc.append(divOpcion2)

    }

    divContenedorPaginacion.append(divContenedorOpc)
    return divContenedorPaginacion

}

//FUNCION QUE CREA UN ELEMENTO EN EL DOM DEL TIPO, LA CLASE Y EL ID QUE SE LE PASA
const crearElemento=(tipo,clases,id )=>{    
    elemento= document.createElement(tipo);
    if(clases!=""){
        elemento.setAttribute("class","")
        clases.forEach(clase => {
            elemento.classList.add(clase)
        });
    }
    if(id !=""){
        elemento.setAttribute('id', id)
    }
    return elemento
}


//FUNCION QUE CREA UN MSJ CON SU DETERMINADO FORMATO, CON LOS DATOS QUE SE LE PASA POR PARAMETRO 
const crearMensaje = async (mensaje)=>{
    divPublicacion=crearElemento('div', ['publicacion'], mensaje.id )
    divContenedor= crearElemento('div', ['contenedor'], "")
    
    if(document.getElementById('myperfil')){        //solo se crea el boton de delete en los msj de mi perfil(es decir los propios)
        divContenedorDelete= crearElemento('div', ['contenedor-delete'],'')
        iconoDel= crearElemento('i',['far','fa-trash-alt'],'')
        divContenedorDelete.append(iconoDel);

            divContenedor.append(divContenedorDelete)
    }
    
    const datosUsuarioMsj= await obtenerDatosDelAutorMensaje(mensaje.usuarios_id)               //obtiene los datos del usuario que publico el msj
            
    aHref= crearElemento('a', [],'');
    divContenedorDatos= crearElemento('div', ['contenedor-datos'],'')
    divContenedorImg= crearElemento('div', ['contenedor-img'],'')
    imgFotoPerfil=crearElemento('img',[],'')
    imgFotoPerfil.setAttribute('src', `data:image/${datosUsuarioMsj.foto_tipo};base64, ${datosUsuarioMsj.foto_contenido}`)
    imgFotoPerfil.setAttribute('alt', 'Foto de perfil')
    divContenedorImg.append(imgFotoPerfil)
    divContenedorUsuario= crearElemento('div', ['contenedor-nombreUsuario'],'')
    pNombreUsuario=crearElemento('p',['nombre-usuario'],'')
    pNombreUsuario.textContent= '@'+ datosUsuarioMsj.nombreusuario
    divContenedorUsuario.append(pNombreUsuario)
    divContenedorDatos.append(divContenedorImg)
    divContenedorDatos.append(divContenedorUsuario)
    
        aHref.append(divContenedorDatos)
        divContenedor.append(aHref)
    

        
    if(mensaje.texto!=""){                                  //se crea texto del msj en caso de que exista
        divContenedorTexto=crearElemento('div', ['contenedor-texto'],'')
        pTexto=crearElemento('p',['texto'],'')
        pTexto.textContent= mensaje.texto
        divContenedorTexto.append(pTexto)

        divContenedor.append(divContenedorTexto)
    }

    if(mensaje.imagen_tipo!=null){                      //se crea el contenedor para la img en caso de que esta exista en el msj
        divContenendorImagenSubida=crearElemento('div', ['contenedor-file'],'')
        img=crearElemento('img',[],'')
        img.setAttribute('src',`data:image/${mensaje.imagen_tipo};base64, ${mensaje.imagen_contenido}`)
        img.setAttribute('alt', 'foto subida')
        divContenendorImagenSubida.append(img)

        divContenedor.append(divContenendorImagenSubida)
    }

    if(document.getElementById("userperfil")){
        dioMeGusta= await consultarMeGusta(nombreUsuarioLogeado,mensaje.id);             //devuelve en caso de haber dado megusta, el id del megusta. Caso contrario devuelve -1
    }
    else{
        dioMeGusta= await consultarMeGusta(nombreUsuario,mensaje.id);             //devuelve en caso de haber dado megusta, el id del megusta. Caso contrario devuelve -1
    }
    
    
    divContenedorInferior=crearElemento('div', ['contenedor-inferior'],'' )
    divContenedorMG=crearElemento('div', ['contenedor-MG'],'' )
    if(dioMeGusta != -1){                                         //comprueba si dio me gusta el usuario logeado al msj
        divContenedorMG.classList.add("active");
        divContenedorMG.setAttribute("id", dioMeGusta);

    }
    iconoMG=crearElemento('i', ['far','fa-heart','like'],'' )
    pCantMG=crearElemento('p', ['cantMG'],'' )
    pCantMG.textContent=mensaje.cant_me_gusta
    divContenedorMG.append(iconoMG)
    divContenedorMG.append(pCantMG)
    divContenedorFH=crearElemento('div',['contenedor-FH'],'')
    pFecha=crearElemento('p',['fecha'],'')
    pFecha.textContent= mensaje.fechayhora
    divContenedorFH.append(pFecha)
    divContenedorInferior.append(divContenedorMG)
    divContenedorInferior.append(divContenedorFH)

        divContenedor.append(divContenedorInferior)
    
        
    divPublicacion.append(divContenedor);
    return divPublicacion ;
  
}


//FUNCION QUE OBTIENE LOS DATOS DEL USUARIO(nombreusuario,imagen perfil) PARA LOS DATOS DEL MSJ
const obtenerDatosDelAutorMensaje= async (id)=>{
    formData= new FormData();
    formData.append("id", id)
    consulta= await fetch('Model/datosBasicosCreadorDelMensaje.php',{
        method: 'POST',
        body: formData
    })
    respuesta= await consulta.json()
    return respuesta;
}

const consultarMeGusta = async (nombreusuario,idMensaje)=>{
    formData= new FormData();
    formData.append("username", nombreusuario);
    formData.append("idMensaje", idMensaje);
    consulta= await fetch('Model/consultaMeGusta.php',{
        method: 'POST',
        body: formData
    })
    respuesta= await consulta.json()
    return respuesta["id"];
}


// CUANDO CARGA LA PAGINA, SE CARGAN LOS PRIMEROS 10 MSJ CON SU RESPECTIVA PAGINACION
document.addEventListener('DOMContentLoaded', async()=>{
    await actualizarMsjPropios(1);
    if(document.getElementById('myperfil')){
        await actualizarUsuariosSeguidos(1);
    }
});

