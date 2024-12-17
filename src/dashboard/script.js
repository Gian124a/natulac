let button = false;
let nav = document.getElementById('nav');
let opcion = document.getElementById('select');
let menu_icon = document.getElementById('menu-icon');
let descripcion = document.getElementById('descripcion-sistema');
let form = document.getElementById('form');

// Función que gestiona la apertura del menú
function menu() {
    nav.style.left = '0';
    nav.style.transition = '0.5s';
    if (window.innerWidth > 1050) {
    }
    
    setTimeout(function() {
        descripcion.style.left = '270px';
        descripcion.style.transition = 'left 0.5s';
    }, 150); 
    
    menu_icon.style.left = '-100vw';
    menu_icon.style.transition = '0.5s';
    button = true;
}

// Función que gestiona el cierre del menú
function exit() {
    nav.style.left = '-100vw';
    nav.style.transition = '0.5s';
    menu_icon.style.left = '0';
    menu_icon.style.transition = '0.5s';
    descripcion.style.left = '5%';  
    descripcion.style.transition = 'left 0.3s';  
    button = false;
}

// Función para seleccionar o deseleccionar los botones
function seleccion(elemento) {
    const botones = document.querySelectorAll('a[id^="select"]');
    botones.forEach(boton => {
        boton.classList.remove('bg-[#2f2c41]');
        boton.classList.remove('text-[#60c970]');
    });

    elemento.classList.add('bg-[#2f2c41]');
    elemento.classList.add('text-[#60c970]');
}
