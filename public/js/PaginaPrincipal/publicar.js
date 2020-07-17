
// CONSTANTES
const btnPublicar= document.getElementById("btn_publicar");
const inputImg= document.getElementById("inputImg");
const contenedorImg= document.getElementById("containerImg");
const msj= document.getElementById("msj");
const formCrearMsj= document.getElementById('crear_msj')


// EVENTO DE ESCUCHA CUANDO SE PRESIONA SOBRE EL INPUT DE PUBLICAR IMAGEN
contenedorImg.addEventListener('click', ()=>{
    inputImg.click();
})


// DESHABILITA UN BOTON
const desabilitarBoton=(boton)=>{
    boton.setAttribute("disabled", true);
    boton.classList.add("disabled");
}


// HABILITA UN BOTON
const habilitarBoton=(boton)=>{
    boton.removeAttribute("disabled");
    boton.classList.remove("disabled");
}

//VALIDA QUE EL CAMPO NO ESTE VACIO
const isEmpty= (element)=>{
    //comprueba que el campo no este vacio . Devuelve verdaderi si esta vacio, y falso en caso de contener algun caracter
    if(element.length == 0){
        return true;
    }
    return false;
}


//EVENTO DE ESCUCHA PARA EL FORMULARIO DE CREAR MSJ
const validateImg = (file) =>{
    // comprueba si el archivo pasado es una archivo de tipo imagen valido
    const imgRegex=  /^(.*)(\.png|\.jpg|\.jpeg|\.gif)$/i;
    return imgRegex.test(file); 
}






//EVENTO DE ESCUCHA PARA EL TEXTAREA DE CREAR MSJ
msj.addEventListener('keyup', (e)=>{
    if(!isEmpty(msj.value)){
        habilitarBoton(btnPublicar);
    }
    else{
        desabilitarBoton(btnPublicar);
        
    }
})

//EVENTO DE ESCUCHA PARA EL INPUT DE LA IMAGEN PARA PUBLICAR MSJ
inputImg.addEventListener('change', (e)=>{
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





//EVENTO DE ESCUCHA PARA EL FORMULARIO DE CREAR MSJ
formCrearMsj.addEventListener('submit', (e) =>{
    e.preventDefault()
    formData= new FormData(formCrearMsj);
    formData.append("username", nombreUsuario )
    fetch('Model/publicarMensaje.php',{
        method: 'POST',
        body: formData,
    }).then(res=> {
        if(res.ok){
            colocarEnviado(Array.from(formCrearMsj.getElementsByClassName('btnPublicar'))[0]);  //ahi se enceuntra el contenedor input del btn enviar 
            mostrarMensajeExito("Mensaje publicado exitosamente");
            if(document.getElementById("myperfil")){
                actualizarMsjPropios(1);
            }
        }
    })
    resetearFormualarioMsj(formCrearMsj);
})


//FUNCION QUE COLOCA EL IMPUT DE PUBLICAR MSJ CON EL ESTILO ENVIADO
const colocarEnviado= (contenedorPublicar)=>{
    contenedorPublicar.classList.add("enviado")
}

//RESETEA EL FORMULARIO PARA PROXIMA PUBLICACION
const resetearFormualarioMsj=(form)=>{
    form.reset();
    img= Array.from(form.getElementsByClassName('container-imagen-prev'))[0]
    btnEnviar=Array.from(form.getElementsByClassName('btnPublicar'))[0]
    setTimeout(() => {
        btnEnviar.classList.remove("enviado")
        desabilitarBoton(btnEnviar)
        vaciarBtnImg(img)
    }, 2000);
    ;}

//LE QUITA LOS ESTILOS AL BOTON IMG 
const vaciarBtnImg= (contenedorImg) =>{
    if(img.classList.contains('valid')){
        img.classList.remove('valid') 
    }else{
        if(img.classList.contains('error')){
            img.classList.remove('error') 
        }
    }
}

//CUANDO CARGA EL DOM, SE DEBABILITA EL BOTON DE PUBLICAR MSJ POR DEFECTO
document.addEventListener('DOMContentLoaded', ()=>{
    desabilitarBoton(btnPublicar);
});