const deletes= document.querySelectorAll('.contenedor-delete');

// console.log(deletes);

const eliminarPublicacion=(elemento)=>{
    const publicacion= elemento.parentNode.parentNode;
    const padre= publicacion.parentNode;
    console.log(publicacion)
    padre.removeChild(publicacion);
}

deletes.forEach(div => {
    div.addEventListener('click', ()=>{
        setTimeout(()=>eliminarPublicacion(div), 500)
    })
});