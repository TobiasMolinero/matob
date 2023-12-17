const botonMenu = document.querySelector('#botonMenu');
const menuResponsive = document.querySelector('#menuResponsive');

var menu_abierto = false;

botonMenu.addEventListener('click', () => {
    if(menu_abierto){
        menuResponsive.classList.remove('abierto');
        menu_abierto = false;
    } else {
        menuResponsive.classList.add('abierto');
        menu_abierto = true;
    }
})