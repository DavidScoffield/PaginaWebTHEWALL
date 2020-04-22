/* Variables */
const btnConfig= document.getElementById('btn__config');
const btnOpenMenuPhone= document.getElementById('openMenu')
const menu= document.getElementById('menu');


/* FUNCIONES */
const abrirCerrarMenu=(elemento)=>{
    if(elemento.style.display == "none" || elemento.style.display == ""){
        elemento.style.display= "flex";
    }
    else{
        elemento.style.display="none";
    }
}





/* Eventos de escucha del DOM */
btnConfig.addEventListener('click', (e)=>{
    const lista= btnConfig.lastElementChild

    if(lista.classList.contains('slideUp')){

        lista.classList.remove('slideUp')
        lista.classList.add('slideDown');
        btnConfig.firstElementChild.style.color= '#fff';
    }
    else{
        lista.classList.remove('slideDown')
        lista.classList.add('slideUp');
        btnConfig.firstElementChild.style.color= '#b1b0b0';
    }
    
})

btnOpenMenuPhone.addEventListener('click', ()=>abrirCerrarMenu(menu));
