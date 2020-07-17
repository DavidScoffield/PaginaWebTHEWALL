
//CREA EL MSJ DE EXITO Y CONTROLA EL TIMEPO EN PANTALLA
const mostrarMensajeExito=(msj)=>{
    elementoCreado=crearMsjExito(msj);
    controlarTiempoEnPantalla(elementoCreado);
}


//FUNCION QUE CREA UN ELEMENTO EN EL DOM DEL TIPO, LA CLASE Y EL ID QUE SE LE PASA
const crearElemento2=(tipo,clases,id )=>{    
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


// FUNCION QUE CREA EL MSJ DE EXITO
const crearMsjExito=(msj)=>{
    fragmento=document.createDocumentFragment();
    divContenedorMsj=crearElemento2('div',['contenedor_msj_exito'],'')
    divContenido=crearElemento2('div',['contenido'],'')

    divIcono=crearElemento2('div',['icono'],'')
    Icono=crearElemento2('i',['far', 'fa-check-circle'],'')
        divIcono.append(Icono);
    
    pTexto=crearElemento2('p',['msj_exito'],'')
    pTexto.textContent= msj;

        divContenido.append(divIcono)
        divContenido.append(pTexto)
        
        divContenedorMsj.append(divContenido)

    fragmento.append(divContenedorMsj);
    document.body.appendChild(fragmento);
    
    return divContenedorMsj;

    
}

// CONTROLA EL TIMEPO QEU SE VA A MOSTRAR EL MSJ
const controlarTiempoEnPantalla=(elemento)=>{
    setTimeout(() => {
        elemento.classList.add('elevar');
        setTimeout(() => {      
            elemento.parentElement.removeChild(elemento);
        }, 4000);
    }, 3000);
}
