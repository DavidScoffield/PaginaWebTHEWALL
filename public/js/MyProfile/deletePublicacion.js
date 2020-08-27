const contPublicaciones = document.getElementById('publicaciones');

//EVENTO CUANDO SE DESEA ELIMINAR LA PUBLICACION
contPublicaciones.addEventListener('click', (e) => {
    const elementClikeado = e.target;
    const arrayClases = Array.from(elementClikeado.classList);
    if (arrayClases.includes('far') && arrayClases.includes('fa-trash-alt')) {
        const divPublicacion = elementClikeado.parentElement.parentElement.parentElement;
        const id = divPublicacion.id; //el id esta almacenado en el div publicacion
        eliminarPublicacion(id);
    }
});

//FUNCION QUE SE ENCARGA DE LA ELIMINACION DE LA PUBLICACION Y ACTUALIZAR LOS MSJ EN PANTALLA
const eliminarPublicacion = async (id) => {
    let result = window.confirm('¿Esta seguro de querer eliminar la publicacion?');
    if (result) {
        respuesta = await sendRemove(id);
        if (respuesta) {
            actualizarMsjPropios(1);
        }
    }
};

//ENVIA LA PETICION AL BACKEND PARA ELIMINAR EL MSJ CON EL ID PASADO DE LA BD
const sendRemove = async (id) => {
    formData = new FormData();
    formData.append('id', id);
    envio = await fetch('Model/eliminarPublicacion.php', {
        method: 'POST',
        body: formData,
    });
    respuesta = await envio.json();
    return respuesta;
};
