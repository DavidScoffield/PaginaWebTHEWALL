// variables para escuchar los eventos
const formBasicData= document.getElementById('form-datos-generales')
const btnSubmitBasicData= document.getElementById('submitDatosGenerales') ;
const basicDataEmail=document.getElementById('basic_datos_email');
const basicDataFirstName=document.getElementById('basic_datos_firstName');
const basicDataLastName=document.getElementById('basic_datos_lastName');
const fileImg=document.getElementById('inputImg');


const formPassword= document.getElementById('form_password')
const actualPassword=document.getElementById('actual_password');
const newPassword=document.getElementById('new_password');
const newPasswordRepeat=document.getElementById('new_passwordRepeat');

//objeto de formulario registro
const formBasicDataIsValid ={
    mail:false,
    firstname:false,
    lastname:false,
    image:false,
}
 
//objeto de formulario registro
const formPasswordIsValid ={
    newPassword:false,
    newPasswordR:false,
    samePassword:false,
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

formBasicData.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateForm(formBasicDataIsValid, formBasicData);
})
formPassword.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateForm(formPasswordIsValid, formPassword);
})



basicDataEmail.addEventListener('change', (e)=>{
    if(validateEmail(basicDataEmail.value)){
        evalueInvalidActive(e);
        formBasicDataIsValid.mail=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
        formBasicDataIsValid.mail=false;
    }

})

basicDataFirstName.addEventListener('change', (e)=>{
    if(validateName(basicDataFirstName.value)){
        evalueInvalidActive(e);
        formBasicDataIsValid.firstname=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
        formBasicDataIsValid.firstname=false;
    }
})

basicDataLastName.addEventListener('change', (e)=>{
    if(validateName(basicDataLastName.value)){
        evalueInvalidActive(e);
        formBasicDataIsValid.lastname=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
        formBasicDataIsValid.lastname=false;
    }
})

fileImg.addEventListener('change', (e)=>{
    if(validateImg(fileImg.value)){
        let parent = e.target.parentNode;
        if(parent.classList.contains('error')){
            parent.classList.remove('error');
        }
        formBasicDataIsValid.image=true;
        parent.classList.add('valid');
    }
    else{
        let parent = e.target.parentNode;
        if(parent.classList.contains('valid')){
            parent.classList.remove('valid');
        }
        formBasicDataIsValid.image=false;
        parent.classList.add('error');
       
    }   
})

newPassword.addEventListener('change', (e)=>{
    if(validatePasswordComplex(newPassword.value)){
        evalueInvalidActive(e);
        formPasswordIsValid.password=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
        formPasswordIsValid.password=false;
    }
})

newPasswordRepeat.addEventListener('change', (e)=>{
    const passwordValid=validatePasswordComplex(newPasswordRepeat.value);
    const same_password=samePassword(newPassword.value, newPasswordRepeat.value)
    if(passwordValid && same_password){
        evalueInvalidActive(e);
        formPasswordIsValid.newPasswordR=true;
        formPasswordIsValid.samePassword=true;
        isValid(e);
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
        formPasswordIsValid.newPasswordR=false;
        formPasswordIsValid.samePassword=false;
    }
})









