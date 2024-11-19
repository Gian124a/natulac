document.addEventListener('DOMContentLoaded', function() {
    servicios();
});

function servicios() {
    const mesa = document.getElementById('mesa');
    const sillas = document.querySelectorAll('.silla');
    const servicio = document.getElementById('servicio').innerText;

    console.log(servicio)
    mesa.style.boxShadow = 'inset 0px 0px 8px 2px rgba(0, 0, 0, 0.2)'; 

    // Verifica el servicio y cambia los estilos según el estado
    if (servicio == 'Disponible') {
        mesa.style.background = '#ace4b0';
        mesa.style.borderColor = '#39a541';
        
        sillas.forEach(silla => {
            silla.style.background = '#82d688';
            silla.style.borderColor = '#39a541';
            silla.style.boxShadow = 'inset 0 4px 8px rgba(0, 0, 0, 0.2)'; 
        });
    }
    else if(servicio == 'Apartado'){
        mesa.style.background = '#dd8181';
        mesa.style.borderColor = '#EE1A1A';
        sillas.forEach(silla => {
            silla.style.background = '#e87f7f';
            silla.style.borderColor = '#EE1A1A';
            silla.style.boxShadow = 'inset 0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    }
    else if(servicio == 'En uso'){
        mesa.style.background = '#88b5e2';
        mesa.style.borderColor = '#005CE7';
        mesa.style.boxShadow = 'inset 0px 0px 8px 2px rgba(0, 0, 0, 0.2)'; 
        sillas.forEach(silla => {
            silla.style.background = '#77aade';
            silla.style.borderColor = '#005CE7';
            silla.style.boxShadow = 'inset 0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    }
}