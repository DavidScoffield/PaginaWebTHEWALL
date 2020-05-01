const publicaciones= document.getElementById('publicaciones')
const listaUsuarios= document.getElementById('lista_usuarios')
const btnPublicaciones= document.getElementById('btn_publicaciones')
const btnListaUsuarios= document.getElementById('btn_lista_usuarios')

const arrayOptions=[publicaciones,listaUsuarios];

const changeView=(array, elemento)=>{
    array.forEach(option=>{
        if(option.classList.contains('activeOption')){
            option.classList.remove('activeOption')
        }
    })
    elemento.classList.toggle('activeOption')
    
}

btnPublicaciones.addEventListener('click', ()=> {
    // console.log('okk')
    changeView(arrayOptions,publicaciones)
});

btnListaUsuarios.addEventListener('click', ()=>{
     changeView(arrayOptions,listaUsuarios)
});

