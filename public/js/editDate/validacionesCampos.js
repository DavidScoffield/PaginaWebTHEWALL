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
    mail:true,
    firstname:true,
    lastname:true,
    image:true,        //se la tiene en cuenta para verificar si enviar el formulario, 
                       //si esta vacio, este se envia  igual y se comprueba con php y se obvio para no subir,
                       //en caso de que se lo llene, si el archivo no es valido no se envia el formulario
                       //y si es valido se va a poder enviar con el submit 
}
 
//objeto de formulario registro
const formPasswordIsValid ={
    actualPassword:false,           
    newPassword:false,
    newPasswordR:false,
    samePassword:false,
}

if(document.getElementById('contraseniaIncorrecta')){
    formPasswordIsValid.newPassword=true;
    formPasswordIsValid.newPasswordR=true;
    formPasswordIsValid.samePassword=true;
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
    // valida si el formulario pasado como primer parametro posee todos sus campos correctos(true)
    const formValid= Object.values(ObjectForm);
    const valid= formValid.findIndex(value=> value == false );
    if(valid == -1){
        formulario.submit();
    }
    else{
        // alert('campos invalidos');
    }
}

const samePassword=(password1, password2)=>{
    // Evalua si las contraseñas ingresadas son iguales
   return password1 === password2;
      
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

const containMsjError = (e) =>{
    const padre= e.target.parentNode.parentNode;
    const ultHijoError= padre.lastElementChild;
    return ultHijoError.classList.contains("contenedor-msj-error");
}

const createMsjError=(e,valorAConcatenar)=>{
    // inserta un mensaje de error con sus clases correspondientes para que se ubique encima del imput
    // recibe en imput el nodo imput al que agregarle el error(que se encuentra en el contenedor principal de este), y en valorAConcatenar el contenido del msj a mostrar
    const padre= e.target.parentNode.parentNode; //se accede al contenedor principal
    const newNodoError= document.createElement("div");
    newNodoError.setAttribute("class", "contenedor-msj-error");
    padre.appendChild(newNodoError);
    const html= "<p class='msj-error'>" + valorAConcatenar + "</p></div>";
    newNodoError.innerHTML= html;      
}


const removeMsjError=(e)=>{
    // elimina el mensaje de error
    // recibe en imput el nodo imput al que eliminar el msj(que se encuentra en el contenedor principal de este)
    const padre= e.target.parentNode.parentNode; //se accede al contenedor principal
    const ultHijoError= padre.lastElementChild;    
    padre.removeChild(ultHijoError);
}




// eventos de escucha para validar los campos del formulario de registro

formBasicData.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateForm(formBasicDataIsValid, formBasicData);
})


basicDataEmail.addEventListener('change', (e)=>{
    if(validateEmail(basicDataEmail.value)){
        evalueInvalidActive(e);
        formBasicDataIsValid.mail=true;
        isValid(e);
        if(containMsjError(e)){
            removeMsjError(e);
        }
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
        formBasicDataIsValid.mail=false;
        if(!containMsjError(e)){
            const msj= "El email no es valido, cambielo"
            createMsjError(e, msj)
        }
    }

})

basicDataFirstName.addEventListener('change', (e)=>{
    if(validateName(basicDataFirstName.value)){
        evalueInvalidActive(e);
        formBasicDataIsValid.firstname=true;
        isValid(e);
        if(containMsjError(e)){
            removeMsjError(e);
        }
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
        formBasicDataIsValid.firstname=false;
        if(!containMsjError(e)){
            const msj= "El nombre no es valido, cambielo"
            createMsjError(e, msj)
        }
    }
})

basicDataLastName.addEventListener('change', (e)=>{
    if(validateName(basicDataLastName.value)){
        evalueInvalidActive(e);
        formBasicDataIsValid.lastname=true;
        isValid(e);
        if(containMsjError(e)){
            removeMsjError(e);
        }
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
        formBasicDataIsValid.lastname=false;
        if(!containMsjError(e)){
            const msj= "El apellido no es valido, cambielo"
            createMsjError(e, msj)
        }
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
        if(containMsjError(e)){
            removeMsjError(e);
        }

    }
    else{
        let parent = e.target.parentNode;
        if(parent.classList.contains('valid')){
            parent.classList.remove('valid');
        }
        formBasicDataIsValid.image=false;
        parent.classList.add('error');
        if(!containMsjError(e)){
            const msj= "El archivo no es valida, cambielo"
            createMsjError(e, msj)
        }
    }   
})

const isEmpty= (element)=>{
    //comprueba que el campo no este vacio . Devuelve verdaderi si esta vacio, y falso en caso de contener algun caracter
    if(element.length == 0){
        return true;
    }
    return false;
}


// PASSWORDS

formPassword.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateForm(formPasswordIsValid, formPassword);
})

actualPassword.addEventListener('change', (e)=>{

    if(!isEmpty(actualPassword.value)){
        formPasswordIsValid.actualPassword= true;
        evalueInvalidActive(e);
        if(containMsjError(e)){
            removeMsjError(e);
        }
    }
    else{
        formPasswordIsValid.actualPassword= false;
    }
});


newPassword.addEventListener('change', (e)=>{
    
    if(validatePasswordComplex(newPassword.value)){
        evalueInvalidActive(e);
        formPasswordIsValid.newPassword=true;
        isValid(e);
        if(containMsjError(e)){
            removeMsjError(e);
        }
    }
    else{
        evalueValidActive(e);
        isInvalid(e);
        formPasswordIsValid.newPassword=false;
        if(!containMsjError(e)){
            const msj= "La contraseña no cumple con los parametros básicos"
            createMsjError(e, msj)
        }
    }
})

newPasswordRepeat.addEventListener('change', (e)=>{
    const passwordValid=validatePasswordComplex(newPasswordRepeat.value);
    const same_password=samePassword(newPassword.value, newPasswordRepeat.value)
    
    if(passwordValid){
        // console.log("ENTROpasswordValid---" + "PasswordValid:" + passwordValid + ", SamePassword: " + same_password+ ", Password: " + newPassword.value + ", PasswRepeat:" + newPasswordRepeat.value)
        formPasswordIsValid.newPasswordR=true;
        if(containMsjError(e)){
            removeMsjError(e);
        }
        if(same_password){
            // console.log("ENTROsamePassword---" + "PasswordValid:" + passwordValid + ", SamePassword: " + same_password+ ", Password: " + newPassword.value + ", PasswRepeat:" + newPasswordRepeat.value)
            evalueInvalidActive(e);
            formPasswordIsValid.samePassword=true;
            isValid(e);
            if(containMsjError(e)){
                removeMsjError(e);
            }
        }
        else{
            // console.log("NOENTROsamePassword---" + "PasswordValid:" + passwordValid + ", SamePassword: " + same_password+ ", Password: " + newPassword.value + ", PasswRepeat:" + newPasswordRepeat.value)
            evalueValidActive(e);
            isInvalid(e);
            formPasswordIsValid.samePassword=false;
            const msj= "No es la misma contraseña"
            createMsjError(e, msj)
        }
    }
    else{
        // console.log("NOENTROpasswordValid---" + "PasswordValid:" + passwordValid + ", SamePassword: " + same_password+ ", Password: " + newPassword.value + ", PasswRepeat:" + newPasswordRepeat.value)
        evalueValidActive(e);
        isInvalid(e);
        formPasswordIsValid.newPasswordR=false;
        if(containMsjError(e)){
            removeMsjError(e);
        }
        const msj= "La contraseña no cumple con los parametros básicos"
        createMsjError(e, msj)
    }
})
