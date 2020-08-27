const buttonsFollow = document.querySelectorAll('.contenedor-botonFollow ');

const showFollow = (elemento) => {
    elemento.classList.toggle('unFollow');
    elemento.firstElementChild.textContent = 'Seguir';
};

const showUnFollow = (elemento) => {
    elemento.classList.toggle('unFollow');
    elemento.firstElementChild.textContent = 'No seguir';
};

const changeFollow = (elemento) => {
    if (elemento.classList.contains('unFollow')) {
        showFollow(elemento);
    } else {
        showUnFollow(elemento);
    }
};

if (buttonsFollow) {
    buttonsFollow.forEach((div) => {
        div.addEventListener('click', () => changeFollow(div));
    });
}
