// variables para escuchar los eventos

const formRegister = document.getElementById('formulario_registro');
const registerEmail = document.getElementById('register_email');
const registerFirstName = document.getElementById('register_firstName');
const registerLastName = document.getElementById('register_lastName');
const registerUsername = document.getElementById('register_user');
const registerPassword = document.getElementById('register_password');
const registerPasswordRepeat = document.getElementById('register_RepeatPassword');
const registerImg = document.getElementById('inputImg');
const btnSubmitRegister = document.getElementById('btn_submitRegister');
const btnResetLogIn = document.getElementById('resetLogIn');

const formLogin = document.getElementById('formulario_logIn');
const loginUsername = document.getElementById('login_user');
const loginPassword = document.getElementById('login_password');
const btnSubmitLogin = document.getElementById('btn_submitLogIn');
const btnResetRegister = document.getElementById('resetRegister');

//objeto de formulario registro
const registerFormIsValid = {
    mail: false,
    firstname: false,
    lastname: false,
    username: false,
    password: false,
    passwordR: false,
    samePassword: false,
    image: false,
};
if (document.getElementById('nombreUsuarioRepetido')) {
    registerFormIsValid.mail = true;
    registerFormIsValid.firstname = true;
    registerFormIsValid.lastname = true;
    registerFormIsValid.password = true;
    registerFormIsValid.passwordR = true;
    registerFormIsValid.samePassword = true;
}

const LogInFormIsValid = {
    username: false,
    password: false,
};

// funciones para validar campos

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
};

const validatePasswordComplex = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number or 1 special character and be at least 6 characters long
    const passwordRegex = /((?=(.*[0-9]))|(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/;
    return passwordRegex.test(password);
};

const validateUsername = (username) => {
    //Alfanumericos con al menos 6 caracteres
    const usernameRegex = /^[a-zA-Z0-9]{6,}$/;
    return usernameRegex.test(username);
};

const validateName = (name) => {
    //Alfabeticos y que no sean vacios
    const nameRegex = /^[a-z]+$/gi;
    return nameRegex.test(name);
};

const isEmpty = (element) => {
    //comprueba que el campo no este vacio . Devuelve verdaderi si esta vacio, y falso en caso de contener algun caracter
    if (element.length == 0) {
        return true;
    }
    return false;
};

const validateForm = (ObjectForm) => {
    // valida si el formulario pasado como primer parametro posee todos sus campos correctos
    const formValid = Object.values(ObjectForm);
    const valid = formValid.findIndex((value) => value == false);
    return valid == -1;
};

const samePassword = (password1, password2) => {
    // Evalua si las contraseñas ingresadas son iguales
    return password1 == password2;
};

const validateImg = (file) => {
    // comprueba si el archivo pasado es una archivo de tipo imagen valido

    const imgRegex = /^(.*)(\.png|\.jpg|\.jpeg|\.gif)$/i;
    return imgRegex.test(file);
};

const isInvalid = (e) => {
    //agrega la clase error que da estilo rojo al campo invalido
    let parent = e.target.parentNode.parentNode;
    parent.classList.add('error');
};

const evalueInvalidActive = (e) => {
    //evalua si la clase error esta activa, de ser asi la elimina
    let parent = e.target.parentNode.parentNode;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
};

const isValid = (e) => {
    //agrega la clase valid que da estilo verde al campo valido
    let parent = e.target.parentNode.parentNode;
    parent.classList.add('valid');
};

const evalueValidActive = (e) => {
    //evalua si la clase valid esta activa, de ser asi la elimina
    let parent = e.target.parentNode.parentNode;
    if (parent.classList.contains('valid')) {
        parent.classList.remove('valid');
    }
};

const agregarClassValida = (e) => {
    //agrega la clase valido que da estilo verde al campo valido
    let parent = e.target.parentNode.parentNode;
    parent.classList.add('valido');
};

const eliminarClassValida = (e) => {
    //evalua si la clase valido esta activa, de ser asi la elimina
    let parent = e.target.parentNode.parentNode;
    if (parent.classList.contains('valido')) {
        parent.classList.remove('valido');
    }
};

const eliminarClaseValidoDeTodosImputs = (formulario) => {
    // elimina del formulario la clase valido de todos los imputs
    contenedoresImputs = Array.from(formulario.getElementsByClassName('contenedor-input'));
    contenedoresImputs.forEach((contenedor) => {
        if (contenedor.classList.contains('valido')) {
            contenedor.classList.remove('valido');
        }
    });
};

const containMsjError = (e) => {
    const padre = e.target.parentNode.parentNode;
    const ultHijoError = padre.lastElementChild;
    return ultHijoError.classList.contains('contenedor-msj-error');
};

const createMsjError = (e, valorAConcatenar) => {
    // inserta un mensaje de error con sus clases correspondientes para que se ubique encima del imput
    // recibe en imput el nodo imput al que agregarle el error(que se encuentra en el contenedor principal de este), y en valorAConcatenar el contenido del msj a mostrar
    const padre = e.target.parentNode.parentNode; //se accede al contenedor principal
    const newNodoError = document.createElement('div');
    newNodoError.setAttribute('class', 'contenedor-msj-error');
    padre.appendChild(newNodoError);
    const html = "<p class='msj-error'>" + valorAConcatenar + '</p></div>';
    newNodoError.innerHTML = html;
};

const removeMsjError = (e) => {
    // elimina el mensaje de error
    // recibe en imput el nodo imput al que eliminar el msj(que se encuentra en el contenedor principal de este)
    const padre = e.target.parentNode.parentNode; //se accede al contenedor principal
    const ultHijoError = padre.lastElementChild;
    padre.removeChild(ultHijoError);
};

const crearMsjdeCampoVacio = (contenedorDondeAgregarClase, contenedorDondeAgregarMsj) => {
    if (
        !contenedorDondeAgregarClase.classList.contains('valid') &&
        !contenedorDondeAgregarClase.classList.contains('error') &&
        !contenedorDondeAgregarClase.classList.contains('valido')
    ) {
        //comprueba que el input este vacio
        contenedorDondeAgregarClase.classList.add('error'); //se le agrega la clase error
        if (
            !contenedorDondeAgregarMsj.lastElementChild.classList.contains('contenedor-msj-error')
        ) {
            //se verifica si ya contenia un msj de error
            const msj = 'Campo obligatorio'; // se le agrega el msj error
            const newNodoError = document.createElement('div');
            newNodoError.setAttribute('class', 'contenedor-msj-error');
            contenedorDondeAgregarMsj.appendChild(newNodoError);
            const html = "<p class='msj-error'>" + msj + '</p></div>';
            newNodoError.innerHTML = html;
        }
    }
};
const invalidatedImputs = (formulario) => {
    const contenedoresInputs = Array.from(formulario.getElementsByClassName('contenedor-input'));
    contenedoresInputs.forEach((contenedor) => {
        if (contenedor.classList.contains('contenedor-img')) {
            //si se trata del imput file
            const hijo = contenedor.firstElementChild;
            crearMsjdeCampoVacio(hijo, contenedor);
        } else {
            crearMsjdeCampoVacio(contenedor, contenedor);
        }
    });
};

const eliminarTodosMsjError = (formulario) => {
    const contenedoresInputs = Array.from(formulario.getElementsByClassName('contenedor-input'));
    contenedoresInputs.forEach((contenedor) => {
        if (contenedor.lastElementChild.classList.contains('contenedor-msj-error')) {
            contenedor.removeChild(contenedor.lastElementChild);
        }
    });
};

const negarFormularioLogIn = (f) => {
    f.username = false;
    f.password = false;
};

const negarFormularioRegister = (f) => {
    f.mail = false;
    f.firstname = false;
    f.lastname = false;
    f.username = false;
    f.password = false;
    f.passwordR = false;
    f.samePassword = false;
    f.image = false;
};

// eventos de escucha para validar los campos del formulario de registro

//---------------------LOGIN
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(LogInFormIsValid)) {
        iniciarSesion(formLogin);
    } else {
        invalidatedImputs(formLogin);
    }
});

btnResetLogIn.addEventListener('click', () => {
    negarFormularioLogIn(LogInFormIsValid);
    eliminarTodosMsjError(formLogin);
    eliminarClaseValidoDeTodosImputs(formLogin);
});

loginUsername.addEventListener('change', (e) => {
    if (!isEmpty(loginUsername.value)) {
        LogInFormIsValid.username = true;
        evalueInvalidActive(e);
        agregarClassValida(e);
        if (containMsjError(e)) {
            removeMsjError(e);
        }
    } else {
        LogInFormIsValid.username = false;
        eliminarClassValida(e);
        if (!containMsjError(e)) {
            const msj = 'No se permiten campos vacios';
            createMsjError(e, msj);
        }
    }
});

loginPassword.addEventListener('change', (e) => {
    if (!isEmpty(loginPassword.value)) {
        LogInFormIsValid.password = true;
        evalueInvalidActive(e);
        agregarClassValida(e);
        if (containMsjError(e)) {
            removeMsjError(e);
        }
    } else {
        LogInFormIsValid.password = false;
        eliminarClassValida(e);
        if (!containMsjError(e)) {
            const msj = 'No se permiten campos vacios';
            createMsjError(e, msj);
        }
    }
});

//----------------------REGISTRO

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(registerFormIsValid)) {
        registrarse(formRegister);
    } else {
        invalidatedImputs(formRegister);
    }
});

btnResetRegister.addEventListener('click', () => {
    eliminarTodosMsjError(formRegister);
    negarFormularioRegister(registerFormIsValid);
});

registerEmail.addEventListener('change', (e) => {
    if (validateEmail(registerEmail.value)) {
        evalueInvalidActive(e);
        registerFormIsValid.mail = true;
        isValid(e);
        if (containMsjError(e)) {
            removeMsjError(e);
        }
    } else {
        evalueValidActive(e);
        isInvalid(e);
        registerFormIsValid.mail = false;
        const msj = 'El email no es valido, cambielo';
        if (containMsjError(e)) {
            removeMsjError(e);
            createMsjError(e, msj);
        } else {
            createMsjError(e, msj);
        }
    }
});

registerFirstName.addEventListener('change', (e) => {
    if (validateName(registerFirstName.value)) {
        evalueInvalidActive(e);
        registerFormIsValid.firstname = true;
        isValid(e);
        if (containMsjError(e)) {
            removeMsjError(e);
        }
    } else {
        evalueValidActive(e);
        isInvalid(e);
        registerFormIsValid.firstname = false;
        const msj = 'El nombre no es valido, cambielo';
        if (containMsjError(e)) {
            removeMsjError(e);
            createMsjError(e, msj);
        } else {
            createMsjError(e, msj);
        }
    }
});

registerLastName.addEventListener('change', (e) => {
    if (validateName(registerLastName.value)) {
        evalueInvalidActive(e);
        registerFormIsValid.lastname = true;
        isValid(e);
        if (containMsjError(e)) {
            removeMsjError(e);
        }
    } else {
        evalueValidActive(e);
        isInvalid(e);
        registerFormIsValid.lastname = false;
        const msj = 'El apellido no es valido, cambielo';
        if (containMsjError(e)) {
            removeMsjError(e);
            createMsjError(e, msj);
        } else {
            createMsjError(e, msj);
        }
    }
});

registerUsername.addEventListener('change', (e) => {
    if (validateUsername(registerUsername.value)) {
        evalueInvalidActive(e);
        registerFormIsValid.username = true;
        isValid(e);
        if (containMsjError(e)) {
            removeMsjError(e);
        }
    } else {
        evalueValidActive(e);
        isInvalid(e);
        registerFormIsValid.username = false;
        const msj = 'El nombre de usuario no es valido, cambielo';
        if (containMsjError(e)) {
            removeMsjError(e);
            createMsjError(e, msj);
        } else {
            createMsjError(e, msj);
        }
    }
});

registerPassword.addEventListener('change', (e) => {
    if (validatePasswordComplex(registerPassword.value)) {
        evalueInvalidActive(e);
        registerFormIsValid.password = true;
        isValid(e);
        if (containMsjError(e)) {
            removeMsjError(e);
        }
    } else {
        evalueValidActive(e);
        isInvalid(e);
        registerFormIsValid.password = false;
        const msj = 'La contraseña no cumple con los parametros básicos';
        if (containMsjError(e)) {
            removeMsjError(e);
            createMsjError(e, msj);
        } else {
            createMsjError(e, msj);
        }
    }
});

registerPasswordRepeat.addEventListener('change', (e) => {
    const passwordValid = validatePasswordComplex(registerPasswordRepeat.value);
    const same_password = samePassword(registerPassword.value, registerPasswordRepeat.value);

    if (passwordValid) {
        // console.log("ENTROpasswordValid---" + "PasswordValid:" + passwordValid + ", SamePassword: " + same_password+ ", Password: " + newPassword.value + ", PasswRepeat:" + newPasswordRepeat.value)
        registerFormIsValid.passwordR = true;
        if (containMsjError(e)) {
            removeMsjError(e);
        }
        if (same_password) {
            // console.log("ENTROsamePassword---" + "PasswordValid:" + passwordValid + ", SamePassword: " + same_password+ ", Password: " + newPassword.value + ", PasswRepeat:" + newPasswordRepeat.value)
            evalueInvalidActive(e);
            registerFormIsValid.samePassword = true;
            isValid(e);
            if (containMsjError(e)) {
                removeMsjError(e);
            }
        } else {
            // console.log("NOENTROsamePassword---" + "PasswordValid:" + passwordValid + ", SamePassword: " + same_password+ ", Password: " + newPassword.value + ", PasswRepeat:" + newPasswordRepeat.value)
            evalueValidActive(e);
            isInvalid(e);
            registerFormIsValid.samePassword = false;
            const msj = 'No es la misma contraseña';
            createMsjError(e, msj);
        }
    } else {
        // console.log("NOENTROpasswordValid---" + "PasswordValid:" + passwordValid + ", SamePassword: " + same_password+ ", Password: " + newPassword.value + ", PasswRepeat:" + newPasswordRepeat.value)
        evalueValidActive(e);
        isInvalid(e);
        registerFormIsValid.passwordR = false;
        if (containMsjError(e)) {
            removeMsjError(e);
        }
        const msj = 'La contraseña no cumple con los parametros básicos';
        createMsjError(e, msj);
    }
});

registerImg.addEventListener('change', (e) => {
    if (validateImg(registerImg.value)) {
        let parent = e.target.parentNode;
        if (parent.classList.contains('error')) {
            parent.classList.remove('error');
        }
        registerFormIsValid.image = true;
        parent.classList.add('valid');
        if (containMsjError(e)) {
            removeMsjError(e);
        }
    } else {
        let parent = e.target.parentNode;
        if (parent.classList.contains('valid')) {
            parent.classList.remove('valid');
        }
        registerFormIsValid.image = false;
        parent.classList.add('error');
        const msj = 'El archivo no es valida, cambielo';
        if (containMsjError(e)) {
            removeMsjError(e);
            createMsjError(e, msj);
        } else {
            createMsjError(e, msj);
        }
    }
});
