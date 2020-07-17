const contenedorPublicacionesParaLike= document.getElementById("publicaciones")

//EVENTO CUANDO SE DESEA ELIMINAR LA PUBLICACION
contenedorPublicacionesParaLike.addEventListener('click', async(e)=>{
    const elementClikeado= e.target;
    const arrayClases= Array.from(elementClikeado.classList)
    if(arrayClases.includes("like")){
        const padre= elementClikeado.parentElement;
        if(padre.classList.contains("active")){
            await dislike(padre);
        }else{
            await like(padre);
        }
    }
})


// FUNCION QUE DA LIKE AL MSJ CLIKEADO
const like = async(padre) =>{
    const divPublicacion=padre.parentElement.parentElement.parentElement;
    const idMensaje= divPublicacion.id;              //el id del msj esta almacenado en el div publicacion 
    let userNameLogged
    if(document.getElementById("userperfil")){
       userNameLogged=nombreUsuarioLogeado
    }else{
       userNameLogged=nombreUsuario
    }
    resultado= await enviarLike(idMensaje,userNameLogged);
    dioMeGusta= await consultarMeGusta(userNameLogged,idMensaje);             //devuelve en caso de haber dado megusta, el id del megusta. Caso contrario devuelve -1
    if(dioMeGusta != -1){
        padre.classList.add("active");
        padre.setAttribute("id", dioMeGusta);
        actualizarCantMeGusta(idMensaje,padre);
    }
}

// FUNCION QUE DA DISLIKE AL MSJ CLIKEADO
const dislike = async(padre) =>{
    const divPublicacion=padre.parentElement.parentElement.parentElement;
    const idMensaje= divPublicacion.id;              //el id del msj esta almacenado en el div publicacion 
    const idMeGusta= padre.id;              //el id del msj esta almacenado en el div publicacion 
    resultado= await enviarDisLike(idMeGusta);
    if(resultado){
        padre.classList.remove("active");
        padre.removeAttribute("id")
        actualizarCantMeGusta(idMensaje,padre);
    }
}


//FUNCION QUE ACTUALIZA LA CANT DE MG DEL MSJ PASADO POR PARAM
const actualizarCantMeGusta= async(idMensaje,padre)=>{
    formData= new FormData();
    formData.append("idMensaje",idMensaje);
    res= await fetch("Model/cantMeGustaDeMsj.php",{
        method: "POST",
        body: formData
    })
    cantMeGusta= await res.json();
    
    pCantMeGusta=Array.from(padre.getElementsByClassName("cantMG"))[0];
    pCantMeGusta.textContent= cantMeGusta;
}

//ENVIA A LA BD LOS DATOS A AGREGAR EN LA TABLA ME GUSTA 
const enviarLike= async(idMensaje, userNameLogged)=>{
    formData= new FormData();
    formData.append("username",userNameLogged);
    formData.append("idMensaje",idMensaje);
    res= await fetch("Model/darLike.php",{
        method: "POST",
        body: formData
    })
    datos= await res.json();
    return datos;
}

//ENVIA A LA BD LOS DATOS A ELIMINAR EN LA TABLA ME GUSTA 
const enviarDisLike= async(idMeGusta)=>{
    formData= new FormData();
    formData.append("idMeGusta",idMeGusta);
    res= await fetch("Model/darDislike.php",{
        method: "POST",
        body: formData
    })
    datos= await res.json();
    return datos;
}