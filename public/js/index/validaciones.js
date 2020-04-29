// variables para escuchar los eventos

const btnSubmitRegister= document.getElementById('btn_submitRegister') ;
const formRegister= document.getElementById('formulario_registro')
const registerEmail=document.getElementById('register_email');
const registerFirstName=document.getElementById('register_firstName');
const registerLastName=document.getElementById('register_lastName');
const registerUsername=document.getElementById('register_user');
const registerPassword=document.getElementById('register_password');
const registerPasswordRepeat=document.getElementById('register_RepeatPassword');
const registerImg=document.getElementById('inputImg');

const btnSubmitLogin= document.getElementById('btn_submitLogIn') ;
const formLogin= document.getElementById('formulario_logIn')

//objeto de formulario registro
const formIsValid ={
    mail:false,
    firstname:false,
    lastname:false,
    username:false,
    password:false,
    passwordR:false,
    samePassword:false,
    image:false
}


// funciones para validar campos

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(email);

}

const validatePasswordComplex = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number or 1 special character and be at least 6 characters long
    const passwordRegex = /((?=(.*[0-9]))|(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/
    return passwordRegex.test(password); 
}


const validateUsername = (username) => {
    //Alfanumericos con al menos 6 caracteres
    const usernameRegex = /^[a-zA-Z0-9]{6,}$/
    return usernameRegex.test(username);

}


const validateName = (name) => {
    //Alfabeticos y que no sean vacios
    const nameRegex = /^[a-z]+$/gi;
    return nameRegex.test(name);

}

const validateForm =(ObjectForm, formulario)=>{
    // valida si el formulario pasado como primer parametro posee todos sus campos correctos
    const formValid= Object.values(ObjectForm);
    const valid= formValid.findIndex(value=> value == false );
    if(valid == -1){
        formulario.submit();
    }
    else{
        alert('campos invalidos');
    }
}

const samePassword=(password1, password2)=>{
    // Evalua si las contraseñas ingresadas son iguales
   return password1 == password2;
      
}

const validateImg = (file) =>{
    // comprueba si el archivo pasado es una archivo de tipo imagen valido

    const imgRegex=  /^(.*)(\.png|\.jpg|\.jpeg|\.gif)$/i;
    return imgRegex.test(file); 
}

const isInvalid= (e) => {
    //agrega la clase error que da estilo rojo al campo invalido
    let parent = e.target.parentNode.parentNode;
    parent.classList.add('error');
};

const evalueInvalidActive= (e) => {
    //evalua si la clase error esta activa, de ser asi la elimina
    let parent = e.target.parentNode.parentNode;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
};


const isValid=(e)=>{
    //agrega la clase valid que da estilo verde al campo valido
    let parent = e.target.parentNode.parentNode;
    parent.classList.add('valid');
}


const evalueValidActive= (e) => {
    //evalua si la clase valid esta activa, de ser asi la elimina
    let parent = e.target.parentNode.parentNode;
    if(parent.classList.contains('valid')){
        parent.classList.remove('valid');
    }
};




// eventos de escucha para validar los campos del formulario de registro

formRegister.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateForm(formIsValid, formRegister);
})

registerEmail.addEventListener('change', (e)=>{
    if(validateEmail(registerEmail.value)){
        evalueInvalidActive(e);
        formIsValid.mail=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
    }

})

registerFirstName.addEventListener('change', (e)=>{
    if(validateName(registerFirstName.value)){
        evalueInvalidActive(e);
        formIsValid.firstname=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
    }
})

registerLastName.addEventListener('change', (e)=>{
    if(validateName(registerLastName.value)){
        evalueInvalidActive(e);
        formIsValid.lastname=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
    }
})

registerUsername.addEventListener('change', (e)=>{
    if(validateUsername(registerUsername.value)){
        evalueInvalidActive(e);
        formIsValid.username=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
    }
})

registerPassword.addEventListener('change', (e)=>{
    if(validatePasswordComplex(registerPassword.value)){
        evalueInvalidActive(e);
        formIsValid.password=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
    }
})

registerPasswordRepeat.addEventListener('change', (e)=>{
    const passwordValid=validatePasswordComplex(registerPasswordRepeat.value);
    const same_password=samePassword(registerPassword.value, registerPasswordRepeat.value)
    if(passwordValid && same_password){
        evalueInvalidActive(e);
        formIsValid.passwordR=true;
        formIsValid.samePassword=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
    }
})

registerImg.addEventListener('change', (e)=>{
    if(validateImg(registerImg.value)){
        let parent = e.target.parentNode;
        if(parent.classList.contains('error')){
            parent.classList.remove('error');
        }
        formIsValid.image=true;
        parent.classList.add('valid');
    }
    else{
        let parent = e.target.parentNode;
        if(parent.classList.contains('valid')){
            parent.classList.remove('valid');
        }
        parent.classList.add('error');
       
    }   
})








