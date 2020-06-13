const btnPublicar= document.getElementById("btn_publicar");
const inputImg= document.getElementById("inputImg");
const contenedorImg= document.getElementById("containerImg");
const msj= document.getElementById("msj");

/* const publicar ={
    msj:false,
    img:false,
} */


contenedorImg.addEventListener('click', ()=>{
    inputImg.click();
 })

const desabilitarBoton=(boton)=>{
    boton.setAttribute("disabled", true);
    boton.classList.add("disabled");
}

const habilitarBoton=(boton)=>{
    boton.removeAttribute("disabled");
    boton.classList.remove("disabled");
}

const isEmpty= (element)=>{
    //comprueba que el campo no este vacio . Devuelve verdaderi si esta vacio, y falso en caso de contener algun caracter
    if(element.length == 0){
        return true;
    }
    return false;
}

const validateImg = (file) =>{
    // comprueba si el archivo pasado es una archivo de tipo imagen valido

    const imgRegex=  /^(.*)(\.png|\.jpg|\.jpeg|\.gif)$/i;
    return imgRegex.test(file); 
}

desabilitarBoton(btnPublicar);

msj.addEventListener('change', (e)=>{
    if(!isEmpty(msj.value)){
        habilitarBoton(btnPublicar);
    }
    else{
        desabilitarBoton(btnPublicar);

    }
})

inputImg.addEventListener('change', (e)=>{
    console.log("HOLAAA");
    
    if(validateImg(inputImg.value)){
        habilitarBoton(btnPublicar);
        if(contenedorImg.classList.contains('error')){
            contenedorImg.classList.remove('error');
        }
        contenedorImg.classList.add('valid');
    }
    else{
        desabilitarBoton(btnPublicar);
        if(contenedorImg.classList.contains('valid')){
            contenedorImg.classList.remove('valid');
        }
        contenedorImg.classList.add('error');
       
    }   
})

 