const btnAbrir= document.getElementById('register');
const btnCerrar= document.getElementById('close');
const modal= document.getElementById('bg-modal');
const cambiarRegister= document.getElementById('cambiar_opcion_register');
// const cambiarLogIn= document.getElementById('');


btnAbrir.addEventListener('click', ()=>{
    modal.style.display="flex";
});

btnCerrar.addEventListener('click', ()=>{
    modal.style.display="none";   
});

window.addEventListener('click', (e)=>{
    if((e.target == modal)){
        result=window.confirm("¿Desea salir del menu?")
        if(result){
            modal.style.display="none";   
        }
    } 
});


