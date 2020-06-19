// RECUPERA LOS DATOS PERSONALES DE LA BD
const getDatosPersonales=async()=>{
    formData= new FormData()
    formData.append("username", nombreUsuario)
    res= await fetch('Model/devolverDatosPersonales.php', {
        method: 'POST',
        body: formData,
    })
    datos= await res.json();
    return datos;
}

//MUESTRA LOS DATOS PASADOS POR PARAM EN EL DOM
const mostrarDatos=async(datos)=>{
    const contenedorPerfil= document.getElementById('contenedor-perfil')
    const contenedorImg=Array.from(contenedorPerfil.getElementsByClassName('contenedor-img'))[0]
    contenedorImg.firstElementChild.setAttribute('src', `data:image/${datos.foto_tipo};base64, ${datos.foto_contenido}`)
    const contenedorNombre=Array.from(contenedorPerfil.getElementsByClassName('contenedor-nombre'))[0]
    contenedorNombre.firstElementChild.textContent= datos.nombre;
    const contenedorApellido=Array.from(contenedorPerfil.getElementsByClassName('contenedor-apellido'))[0]
    contenedorApellido.firstElementChild.textContent= datos.apellido;
    const contenedorNombreUsuario=Array.from(contenedorPerfil.getElementsByClassName('contenedor-username'))[0]
    contenedorNombreUsuario.firstElementChild.textContent= '@' + datos.nombreusuario;

    //ACCIONES A HACER EN EL CASO DE ESTAR EN EL PERFIL DE UN USUARIO QUE NO ES EL MIO
    if(document.getElementById("userperfil")){
        const idFollow= await consultarSeguimiento(nombreUsuarioLogeado,nombreUsuario);
        const contenedorBtnFollowPerfil= document.getElementById('btnFollowPerfil');

        if(idFollow != -1){          //quiere decir que sigue al usuario en pantalla
            contenedorBtnFollowPerfil.classList.add("unFollow");
            contenedorBtnFollowPerfil.setAttribute("idFollow", idFollow);
            contenedorBtnFollowPerfil.firstElementChild.textContent="No seguir";
        }else{
            contenedorBtnFollowPerfil.firstElementChild.textContent="Seguir";
        }
    }
}

//ENCARGADO DE RECUPERAR LOS DATOS PERSONALES DE LA BD Y MOSTRARLOS EN EL DOM
const actualizarDatosPersonalesDOM=async()=>{
    datos= await getDatosPersonales();
    mostrarDatos(datos);
}


// CUANDO CARGA LA PAGINA, SE CARGAN LOS PRIMEROS 10 MSJ CON SU RESPECTIVA PAGINACION
document.addEventListener('DOMContentLoaded', async()=>{
    actualizarDatosPersonalesDOM();
});

