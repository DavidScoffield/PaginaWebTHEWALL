const formularioDatosBasicos = document.getElementById('form-datos-generales');
const formularioContraseñas = document.getElementById('form_password');
const btnFormularioBasico = document.getElementById('submitDatosGenerales');
const btnFormularioContraseñas = document.getElementById('submitPassword');

// FUNCION QUE DEVUELVE LOS DATOS BASICOS DEL USUARIO
const getDatosBasicos = async () => {
    let formData = new FormData();
    formData.append('username', nombreUsuario);

    const resMensajes = await fetch('Model/devolverDatosPersonalesBasicos.php', {
        method: 'POST',
        body: formData,
    });

    const datos = await resMensajes.json(); //devuelve un arreglo con los datos basicos del usuario logeado

    return datos;
};

const vaciarFormulario = (formulario) => {
    formulario.reset();
    contenedoresImputs = Array.from(formulario.getElementsByClassName('containers'));
    // console.log(contenedoresImputs)
    contenedoresImputs.forEach((contenedor) => {
        if (contenedor.classList.contains('focus')) {
            contenedor.classList.remove('focus');
        }
        if (contenedor.classList.contains('valid')) {
            contenedor.classList.remove('valid');
        }
        if (contenedor.classList.contains('error')) {
            contenedor.classList.remove('error');
        }
        msjError = Array.from(contenedor.getElementsByClassName('contenedor-msj-error'));
        msjError.forEach((msj) => {
            contenedor.removeChild(msj);
        });
    });
    contImg = Array.from(formulario.getElementsByClassName('container-imagen-prev'));
    // console.log(contImg)
    contImg.forEach((img) => {
        if (img.classList.contains('valid')) {
            img.classList.remove('valid');
        }
        if (img.classList.contains('error')) {
            img.classList.remove('error');
        }
    });
};

const insertarDatos = (datos) => {
    inputNombre = document.getElementById('basic_datos_firstName');
    inputNombre.setAttribute('value', datos['nombre']);
    inputNombre.parentElement.parentElement.classList.add('focus');

    inputNombre = document.getElementById('basic_datos_lastName');
    inputNombre.setAttribute('value', datos['apellido']);
    inputNombre.parentElement.parentElement.classList.add('focus');

    inputNombre = document.getElementById('basic_datos_email');
    inputNombre.setAttribute('value', datos['email']);
    inputNombre.parentElement.parentElement.classList.add('focus');
};

//FUNCION ENCARGADA DE ACTUALIZAR LOS DATOS DEL DOM CON LO QUE HAY EN LA BASE DE DATOS
const actualizarDatosBasicosEnDOM = async () => {
    //RECUPERO LOS DATOS DE LA BD
    datos = await getDatosBasicos();
    //VACIO EL FORMULARIO PARA ASEGURARME QUE NO OCURRAN ERRORES
    vaciarFormulario(formularioDatosBasicos);
    //INSERTO LOS DATOS EN EL DOM
    insertarDatos(datos);
};

//ENVIA CONSULTA A LA BD SOBRE LA CONTRASEÑA ACTUAL COLOCADA
const validarContraseñaActual = async (contrasenia) => {
    formData = new FormData();
    formData.append('passwordActual', contrasenia);
    formData.append('username', nombreUsuario);
    const respuesta = await fetch('Model/consultaContraseniaActual.php', {
        method: 'POST',
        body: formData,
    });
    datos = await respuesta.json();

    return datos;
};

//ENVIA LA ACTUALIZACION DE LOS DATOS BASICOS A LA BD
const enviarActualizacionDatosBasicos = async (formBasicData) => {
    formData = new FormData(formBasicData);
    formData.append('username', nombreUsuario);
    const respuesta = await fetch('Model/actualizarDatosPersonalesBasicos.php', {
        method: 'POST',
        body: formData,
    });
    const datos = await respuesta.json();
    return datos;
};

//ENVIA LA ACTUALIZACION DE LAS CONTRASEÑAS A LA BD
const enviarActualizacionContraseñas = async (newPassword) => {
    formData = new FormData();
    formData.append('newPassword', newPassword);
    formData.append('username', nombreUsuario);
    respuesta = await fetch('Model/actualizarDatosPersonalesContraseñas.php', {
        method: 'POST',
        body: formData,
    });
    datos = await respuesta.json();
    return datos;
};

// CUANDO CARGA LA PAGINA, SE CARGAN LOS PRIMEROS 10 MSJ CON SU RESPECTIVA PAGINACION
document.addEventListener('DOMContentLoaded', async () => {
    await actualizarDatosBasicosEnDOM();
});
