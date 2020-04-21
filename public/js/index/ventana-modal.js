const btnAbrirRegister= document.getElementById('register');
const btnCerrarRegister= document.getElementById('closeRegister');
const modalRegister= document.getElementById('bg-modal-register');
const cambiarRegister= document.getElementById('cambiar_opcion_register');
const resetRegister= document.getElementById('resetRegister');


const btnAbrirLogIn= document.getElementById('login');
const btnCerrarLogIn= document.getElementById('closeLogIn');
const modalLogIn= document.getElementById('bg-modal-LogIn');
const cambiarLogIn= document.getElementById('cambiar_opcion_LogIn');
const resetLogIn= document.getElementById('resetLogIn');


const inputs= document.querySelectorAll('.input');


// funciones para los eventos y animaciones de las ventanas modales
    //eventos
const abrirModal=(elemento)=>{
    elemento.style.display="flex";
}

const cerrarModal =(elemento)=>{
    elemento.style.display="none";  
}

const clickAfuera=(e , elemento)=>{
    if((e.target == elemento)){
        let result=window.confirm("¿Desea salir del menu?")
        if(result){
            elemento.style.display="none";   
        }
    } 
}

    //animaciones
const intercambiarModal=(modalActiva, modalCambiar)=>{
    cerrarModal(modalActiva);
    abrirModal(modalCambiar);
}

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

// si se apreta sobre reset la clase focus, error y valid de los campos se deben eliminar
const resetarFocus= (modal)=>{
    let containers= modal.querySelectorAll('.containers');
    containers.forEach(element=>{
        
        if(element.classList.contains('focus')){
            element.classList.remove('focus');
        }
        if(element.classList.contains('error')){
            element.classList.remove('error');
        }
        if(element.classList.contains('valid')){
            element.classList.remove('valid');
        }       
    }); 
    let img= document.getElementById('inputImg').parentNode
    if(img.classList.contains('valid')) img.classList.remove('valid');
    if(img.classList.contains('error')) img.classList.remove('error');
}

//eventos para la modal LogIn
btnAbrirLogIn.addEventListener('click', () => abrirModal(modalLogIn));
btnCerrarLogIn.addEventListener('click', ()=> cerrarModal(modalLogIn));
window.addEventListener('click', (e)=> clickAfuera(e , modalLogIn));
cambiarLogIn.addEventListener('click', ()=> intercambiarModal(modalLogIn, modalRegister));
resetLogIn.addEventListener('click', ()=> resetarFocus(modalLogIn));

//eventos para la modal Registro
btnAbrirRegister.addEventListener('click', () => abrirModal(modalRegister));
btnCerrarRegister.addEventListener('click', ()=> cerrarModal(modalRegister));
window.addEventListener('click', (e)=> clickAfuera(e , modalRegister));
cambiarRegister.addEventListener('click', ()=> intercambiarModal(modalRegister, modalLogIn));
resetRegister.addEventListener('click', ()=> resetarFocus(modalRegister));
document.getElementById('iconoSubirImagen').addEventListener('click', ()=>{
    document.getElementById('inputImg').click();
 })






