const iniciarSesion = (formulario) =>{
    
    formData= new FormData(formulario);
    fetch('Model/iniciarSesion.php', {
        method: 'POST',
        body: formData
    })
        .then(res=> res.json())
        .then(data=> {{
            if(data){
                window.location="InicialPage.php"
            }else{
                enError(formulario)               
            }
        }})
}

const errorLogin = (form)=>{
    contenedoresImputs=Array.from(form.getElementsByClassName('contenedor-input'));
    for (const contenedorInput of contenedoresImputs) {   
        contenedorInput.classList.add('error')
    }
    insertarMsjError(contenedoresImputs[0],'Nombre de usuario o contraseña incorrectos.')        
}

const insertarMsjError =(contenedor, msj)=>{
    fragmento=document.createDocumentFragment();
    divSuperior= document.createElement('div');
    divSuperior.setAttribute("class", "contenedor-msj-error")
    p=document.createElement('p')
    p.setAttribute('class', 'msj-error')
    p.textContent= msj
    divSuperior.appendChild(p)    
    fragmento.append(divSuperior)
    contenedor.append(fragmento)
}


const registrarse =(formulario) =>{
    formData= new FormData(formulario);
    fetch('Model/registrarse.php', {
        method: 'POST',
        body: formData
    })
        .then(res=> res.json())
        .then(data=> {{
            if(data){
                window.location="InicialPage.php"
            }else{
                errorRegister(formulario,formData)               
            }
        }})
}

const errorRegister = (form,FormData)=>{
    contenedorNombreUsuario=document.getElementById('register_user').parentElement.parentElement;
    if(contenedorNombreUsuario.classList.contains('valid')){
        contenedorNombreUsuario.classList.remove('valid')
        contenedorNombreUsuario.classList.add('error')
    }
    insertarMsjError(contenedorNombreUsuario,'El nombre de usuario ya existe.')        
    
}