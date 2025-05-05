document.addEventListener('DOMContentLoaded', function() {
    // Resaltar materiales
    const btnResaltar = document.getElementById('btnResaltar');
    const materiales = document.querySelectorAll('#listaMateriales li');
    let isHighlighted = false;
    let highlightTimeout;

    btnResaltar.addEventListener('click', function() {
        // Cancelar resaltado si ya está activo
        if (isHighlighted) {
            clearTimeout(highlightTimeout);
            materiales.forEach(item => item.classList.remove('resaltado'));
            isHighlighted = false;
            btnResaltar.textContent = 'Resaltar materiales';
            return;
        }

        // Activar resaltado
        isHighlighted = true;
        btnResaltar.textContent = 'Quitar resaltado';

        // Quitar resaltado previo
        materiales.forEach(item => item.classList.remove('resaltado'));

        // Forzar reflow para reiniciar animaciones
        void materiales[0].offsetWidth;

        // Aplicar resaltado con efecto secuencial
        materiales.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('resaltado');
            }, index * 100);
        });

        // Desactivar después de 5 segundos
        highlightTimeout = setTimeout(() => {
            materiales.forEach(item => item.classList.remove('resaltado'));
            isHighlighted = false;
            btnResaltar.textContent = 'Resaltar materiales';
        }, 5000);
    });

    // Feedback del video
    const btnFeedback = document.getElementById('btnFeedback');
    btnFeedback.addEventListener('click', function() {
        const respuesta = confirm("¿Te gustó el video explicativo?");
        if (respuesta) {
            alert("¡Gracias por tu feedback! 😊");
        } else {
            alert("Lamentamos que no te haya gustado. ¿Tienes alguna sugerencia?");
        }
    });

    // Control de video
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('play', () => {
            console.log('Video iniciado');
        });

        video.addEventListener('ended', () => {
            console.log('Video finalizado');
        });
    }
});