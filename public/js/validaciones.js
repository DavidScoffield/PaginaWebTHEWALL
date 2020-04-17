const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)) console.log('email válido')
    else console.log('email incorrecto')
}

const validatePasswordComplex = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 6 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/
    if(passwordRegex.test(password)) console.log('password válido')
    else console.log('password incorrecto')
}


const validatePasswordModerate = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if(passwordRegex.test(password)) console.log('password válido')
    else console.log('password incorrecto')
}


const validateUsername = (username) => {
    //Alfanumericos con al menos 6 caracteres
    const usernameRegex = /^[a-zA-Z0-9]{6,}$/
    if(usernameRegex.test(username)) console.log('username válido')
    else console.log('username incorrecto')
}


const validateName = (name) => {
    //Alfabeticos y que no sean vacios
    const nameRegex = /^[a-z]+$/gi;
    if(nameRegex.test(name)) console.log('name válido')
    else console.log('name incorrecto')
}



