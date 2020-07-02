//COMPRUEBA QUE EL USUARIO QUE SE PASO COMO PRIMER PARAM SIGUE AL SEG
const consultarSeguimiento=async(nombreUsuarioLogeado,nombreUsuario)=>{
    formData= new FormData();
    formData.append('username', nombreUsuarioLogeado)
    formData.append('usernameComprobar', nombreUsuario)
    const repuesta= await fetch('Model/consultaSeguimiento.php', {
        method:"POST",
        body: formData
    })
    datos= await repuesta.json()
    return datos;
}

//PETICION DE SEGUIR A LA BD
const seguir =async(nombreUsuarioLogeado,nombreUsuarioASeguir)=>{
    formData= new FormData();
    formData.append('username', nombreUsuarioLogeado)
    formData.append('usernameASeguir', nombreUsuarioASeguir)
    const repuesta= await fetch('Model/follow.php', {
        method:"POST",
        body: formData
    })
    datos= await repuesta.json()
    return datos;
}


//PETICION DE DEJAR DE SEGUIR A LA BD
const dejarSeguir =async(idFollow)=>{
    formData= new FormData();
    formData.append('idFollow',idFollow)
    const repuesta= await fetch('Model/unfollow.php', {
        method:"POST",
        body: formData
    })
    datos= await repuesta.json()
    return datos;
}


//CONVIERTE EL BTN DE SEGUIR A UNA DE DEJAR DE SEGUIR, Y VICEVERSA
const convertirBotonFollow=(btn,idFollow,mostrarUnFollow)=>{
    if(mostrarUnFollow){
        btn.removeAttribute("idFollow");
        btn.classList.remove('unFollow')
        btn.firstElementChild.textContent= "Seguir"
    }else{
        btn.setAttribute("idFollow", idFollow);
        btn.classList.add('unFollow')
        btn.firstElementChild.textContent= "No seguir"
    }
}

// EN CASO DE ESTAR EN EL PERFIL DE UN USUARIO Y DAR CLICK EN EL BOTON DE SEGUIMIENTO
if(document.getElementById("userperfil")){
    const btnFollow =document.getElementById('btnFollowPerfil');

    btnFollow.addEventListener('click', async()=>{
        idFollow=btnFollow.getAttribute("idFollow");
        if( idFollow!= null){                           //quiere decir que lo sigo
            resultado =await dejarSeguir(idFollow);
            if(resultado){
                mostrarUnFollow=true
                convertirBotonFollow(btnFollow,idFollow,mostrarUnFollow)
            }else{
                console.log('ALGUN TIPO DE ERROR AL DEJAR DE SEGUIR')
            }
        }else{                                          //quiere decir que no lo sigo
            resultadoID=await seguir(nombreUsuarioLogeado,nombreUsuario);
            if(resultadoID!=null){
                mostrarUnFollow=false
                convertirBotonFollow(btnFollow,resultadoID,mostrarUnFollow)   
            }else{
                console.log('ALGUN TIPO DE ERROR AL SEGUIR')
            }
        }
    })
}

//parte en buscador

if(document.getElementById("usuario")){
    const btnFollow = document.getElementById('btnFollowPerfil')

    btnFollow.addEventListener('click', async()=>{
        idFollow=btnFollow.getAttribute("idFollow");
        if( idFollow!= null){                           //quiere decir que lo sigo
            resultado =await dejarSeguir(idFollow);
            if(resultado){
                mostrarUnFollow=true
                convertirBotonFollow(btnFollow,idFollow,mostrarUnFollow)
            }else{
                console.log('ALGUN TIPO DE ERROR AL DEJAR DE SEGUIR')
            }
        }else{                                          //quiere decir que no lo sigo
            resultadoID=await seguir(nombreUsuarioLogeado,nombreUsuario);
            if(resultadoID!=null){
                mostrarUnFollow=false
                convertirBotonFollow(btnFollow,resultadoID,mostrarUnFollow)   
            }else{
                console.log('ALGUN TIPO DE ERROR AL SEGUIR')
            }
        }
    })

}

