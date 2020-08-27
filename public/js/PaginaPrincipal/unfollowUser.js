const unFollow = async (idFollow) => {
    formData = new FormData();
    formData.append('idFollow', idFollow);
    resultado = await fetch('Model/unFollow.php', {
        method: 'POST',
        body: formData,
    });
    datos = await resultado.json();
    return datos;
};
