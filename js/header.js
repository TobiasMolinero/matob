const botonMenu = document.getElementById('botonMenu');
const menuResponsive = document.getElementById('menuResponsive');

const itemServicios = document.getElementById('itemServicios')
const menuServicios = document.getElementById('menuServicios')


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


itemServicios.addEventListener('mouseenter', () => {
    menuServicios.classList.remove('dropdown-invisible');
    menuServicios.classList.add('dropdown-servicios');
})

itemServicios.addEventListener('mouseleave', () => {
    menuServicios.classList.remove('dropdown-servicios');
    menuServicios.classList.add('dropdown-invisible');
})

