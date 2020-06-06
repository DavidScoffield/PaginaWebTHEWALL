const msjExito= Array.from(document.getElementsByClassName('contenedor_msj_exito'));

msjExito.forEach(contenedor => {
    setTimeout(() => {
        contenedor.classList.add('elevar');
        setTimeout(() => {
            contenedor.style.display='none';      
        }, 4000);
    }, 3000);
});