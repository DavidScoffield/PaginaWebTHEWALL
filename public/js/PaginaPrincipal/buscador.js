// const btnCerrarBusqueda= document.getElementById('closeSearch');
const modalBuscador= document.getElementById('buscador');
const btnAbrirBusqueda= document.getElementById('openSearch');
const contenidoBusqueda= modalBuscador.firstElementChild;

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
    createItem(contenidoBusqueda,"div", "+" , "closeSearch", "close");   //la funcion crear un elemento en el DOM enviando como parametros los datos con los que lo quiere crear (padre que insertara al hijo,tipo, contenido, ID, class)
    abrirModal(modalBuscador)
});

contenidoBusqueda.addEventListener('click', (e)=>{
    if(document.getElementById("closeSearch")){
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