const btnAbrir= document.getElementById('register');
const btnCerrar= document.getElementById('close');
const modal= document.getElementById('bg-modal');
const cambiarRegister= document.getElementById('cambiar_opcion_register');
const inputs= document.querySelectorAll('.input');
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


// agrega animaciones a los items de los formularios

const focusFunct= (e) => {
    let parent = e.target.parentNode.parentNode;
    parent.classList.add('focus');
};

const blurFunct= (e) => {
    let parent = e.target.parentNode.parentNode;
    if(e.target.value == ''){
        parent.classList.remove('focus');
    }
};

inputs.forEach(input => {
    input.addEventListener('focus', (e)=>focusFunct(e));
    input.addEventListener('blur', (e)=>blurFunct(e));
});

