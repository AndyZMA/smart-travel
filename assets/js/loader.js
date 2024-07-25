window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0'; // Cambia a opacidad 0 primero
        setTimeout(function() {
            loader.style.display = 'none'; // Luego establece display a none
            const content = document.getElementById('content');
            content.classList.add('visible');
            setTimeout(function() {
                content.classList.add('show');
            }, 50); // Un pequeño retraso para activar la transición de opacidad
        }, 8000); // Ajusta este tiempo para que coincida con la transición de opacidad
    }, 7820); // Retraso de 7.82 segundos
});
