
const resetDatosGenerales= document.getElementById('resetDatosGenerales');
const resetPassword= document.getElementById('resetPassword');
const editar= document.getElementById('contenido-edicion');


const inputs= document.querySelectorAll('.input');


// funciones para los eventos y animaciones del formulario
    //eventos

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

//eventos para el apartado datos generales
resetDatosGenerales.addEventListener('click', ()=> resetarFocus(editar));
document.getElementById('iconoSubirImagen').addEventListener('click', ()=>{
    document.getElementById('inputImg').click();
 })

//eventos para el apartado password


resetPassword.addEventListener('click', ()=> resetarFocus(editar));






