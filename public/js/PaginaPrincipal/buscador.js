//import {consultarSeguimiento} from '../baseDatos/seguimiento'

// const btnCerrarBusqueda= document.getElementById('closeSearch');
const modalBuscador= document.getElementById('buscador');
const btnAbrirBusqueda= document.getElementById('openSearch');
const contenidoBusqueda= modalBuscador.firstElementChild;

const busqueda= document.getElementById('formBusqueda')


// funciones para los eventos y animaciones de las ventanas modales
    //eventos
    const abrirModal=(elemento)=>{
        elemento.style.display="flex";
    }
    
    const cerrarModal =(elemento)=>{
        elemento.style.display="none";  
    }

    const createItem = (padre,tipo, contenido , ID, clase)=>{
        const caja= document.createElement(tipo);
        const text= document.createTextNode(contenido);
        caja.appendChild(text);
        caja.setAttribute("id", ID);
        caja.setAttribute("class", clase);
        padre.appendChild(caja);
    }

    const eliminarItem=(node)=>{
        padre= node.parentNode;
        padre.removeChild(node);
    }

   /*  const isInPage=(node)=>{
        return (node === document.body) ? false : document.body.contains(node);
      }
 */

//Eventos de escucha

btnAbrirBusqueda.addEventListener('click', () => {
    if(!document.getElementById("closeSearch")){
        createItem(contenidoBusqueda,"div", "+" , "closeSearch", "close");   //la funcion crear un elemento en el DOM enviando como parametros los datos con los que lo quiere crear (padre que insertara al hijo,tipo, contenido, ID, class)
    }
    // console.log(document.getElementById("closeSearch"))
    abrirModal(modalBuscador)
});

contenidoBusqueda.addEventListener('click', (e)=>{
    if(e.target == document.getElementById('closeSearch')){
        const btnCerrarBusqueda= document.getElementById("closeSearch");
        cerrarModal(modalBuscador);
        eliminarItem(btnCerrarBusqueda); 
    }
  
});

// btnCerrarBusqueda.addEventListener('click', ()=>{
//     alert("click")
//     cerrarModal(modalBuscador);
//     eliminarItem(btnCerrarBusqueda);
// });



// prevenir que el menu si ce cierra en tamaño tablet o inferior, que este vuelva a aoarecer visible si se cambia a un tamaño superior
window.addEventListener('resize', ()=>{
    if(window.screen.width > 769){
        modalBuscador.style.display = "flex"
        
    }
    else{
        modalBuscador.style.display ="none"
    }
})

// const crearElemento=(tipo,clases,id )=>{    
//     elemento= document.createElement(tipo);
//     if(clases!=""){
//         elemento.setAttribute("class","")
//         clases.forEach(clase => {
//             elemento.classList.add(clase)
//         });
//     }
//     if(id !=""){
//         elemento.setAttribute('id', id)
//     }
//     return elemento
// }


const eliminarBusqueda= (arreglo,contenedor) =>{
    arreglo.forEach(usuario => {
        contenedor.removeChild(usuario) // eliminar busqueda previa
    });
}

const actualizarBusqueda= async (textoBusqueda)=>{

    const contenedorBusqueda = document.getElementById('resultado-busqueda')

    const arrayBusqueda = Array.from(contenedorBusqueda.children)
   
    eliminarBusqueda(arrayBusqueda, contenedorBusqueda)

    resBusq = await getBusqueda(textoBusqueda)
    fragmento= document.createDocumentFragment();
    for (const usuario of resBusq) {
        let res= await crearBusquedaUsuario(usuario);
        fragmento.append(res)
    }    
   
    contenedorBusqueda.append(fragmento)

    

}

const crearBusquedaUsuario= async (u)=>{
    divContenedorGral = crearElemento('div',['usuario'],`${u.id}`)

    divContenedorUser = crearElemento('div',['contenedor-nombre'],'')

    aContenedorUser = crearElemento('a', [], '')
    aContenedorUser.setAttribute('href', `userProfile.php?user=${u.nombreusuario}`)
    divNombreUsuario = crearElemento('div', ['nombre'],'')
    divNombreUsuario.textContent = u.nombre
    divApellidoUsuario = crearElemento('div', ['apellido'],'')
    divApellidoUsuario.textContent = u.apellido

    divUsername = crearElemento('div', ['username'],'')
    divUsername.textContent = u.nombreusuario

    divContenedorBoton = crearElemento('div', ['contenedor-botonFollow'],'btnFollowPerfil')
    botonSeguir = crearElemento('button', ['follow','follow-buscador'],'')
    
    //checkeo de seguir 
    const idFollow= await consultarSeguimiento(nombreUsuario,u.nombreusuario);

    if (idFollow != -1){          //quiere decir que sigue al usuario en pantalla
        divContenedorBoton.classList.add("unFollow");
        divContenedorBoton.setAttribute("idFollow", idFollow);
        botonSeguir.textContent="No seguir";
    }else{
        botonSeguir.textContent="Seguir";
    }

    //creacion individual hasta aca

    aContenedorUser.append(divNombreUsuario)
    aContenedorUser.append(divApellidoUsuario)

    divContenedorUser.append(aContenedorUser)

    divContenedorBoton.append(botonSeguir)

    divContenedorGral.append(divContenedorUser)
    divContenedorGral.append(divUsername)
    divContenedorGral.append(divContenedorBoton)

    //anidacion

    return divContenedorGral

}

const getBusqueda = async (busca)=>{
    let formData= new FormData()
    formData.append("username", nombreUsuario)
    formData.append("busca", busca)

    let resBusqueda= await fetch('Model/busquedaUsuario.php',{
        method: 'POST',
        body: formData
    })
    //.then((res) => resBusqueda.json())
    let busqueda = resBusqueda.json()                
    //console.log(res)
    return busqueda

}



busqueda.addEventListener('keyup', async (e) => {

    let textoBusqueda = document.getElementById('textoBusqueda').value.trim()
    if(textoBusqueda){
        await actualizarBusqueda(textoBusqueda) 
    }
    else{
        const contenedorBusqueda = document.getElementById('resultado-busqueda')

        const arrayBusqueda = Array.from(contenedorBusqueda.children)

        eliminarBusqueda(arrayBusqueda,contenedorBusqueda)
    }
})

busqueda.addEventListener('submit', (e)=>{
    e.preventDefault()
})

const contenedorResultadoBusqueda = document.getElementById('resultado-busqueda')

contenedorResultadoBusqueda.addEventListener('click', async (e)=>{
    const elementClikeado= e.target;
    const arrayClases= Array.from(elementClikeado.classList)
    if(arrayClases.includes("follow") && arrayClases.includes("follow-buscador")){
        const nombreUsuarioBuscado = Array.from(elementClikeado.parentNode.parentNode.getElementsByClassName('username'))[0].textContent;
        const btnFollow = elementClikeado.parentNode
        //const divPublicacion=elementClikeado.parentElement.parentElement;
        //const id= divPublicacion.id;
        idFollow=btnFollow.getAttribute("idFollow");
        if( idFollow!= null){                           //quiere decir que lo sigo
            resultado =await dejarSeguir(idFollow);
            if(resultado){
                mostrarUnFollow=true
                convertirBotonFollow(btnFollow,idFollow,mostrarUnFollow)
            }else{
                console.log('ALGUN TIPO DE ERROR AL DEJAR DE SEGUIR')
            }
        }else{
            console.log(nombreUsuario)  
            console.log(nombreUsuarioBuscado)                                          //quiere decir que no lo sigo
            resultadoID=await seguir(nombreUsuario,nombreUsuarioBuscado);
            if(resultadoID!=null){
                mostrarUnFollow=false
                convertirBotonFollow(btnFollow,resultadoID,mostrarUnFollow)   
            }else{
                console.log('ALGUN TIPO DE ERROR AL SEGUIR')
            }
        } 
    }
})






