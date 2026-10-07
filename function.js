const btnTheme = document.querySelector('#btn_cambio');
const body = document.querySelector('.YCD_div_main');

btnTheme.addEventListener('click', () => {

    body.classList.toggle('modo_colorido');

    if (body.classList.contains('modo_colorido')){
        btnTheme.textContent = 'Modo normal';
    } else {
        btnTheme.textContent = 'Cambiar colores';
    }

});