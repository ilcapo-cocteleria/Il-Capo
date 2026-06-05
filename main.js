// Usamos DOMContentLoaded para que responda al instante sin esperar a la música o fotos
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-wrapper');
    const contenido = document.getElementById('contenido-pagina');
    const musica = document.getElementById('bg-music');

    // FUNCIÓN PARA DESBLOQUEAR LA PÁGINA
    const quitarSpinner = () => {
        if (loader) {
            loader.classList.add('fade-out');
        }
        if (contenido) {
            contenido.style.display = 'block';
        }
    };

    // EJECUCIÓN OBLIGATORIA A LOS 2 SEGUNDOS
    setTimeout(() => {
        quitarSpinner();

        // Intento seguro de reproducción de música
        if (musica) {
            musica.volume = 0.5;
            musica.play().catch(() => {
                console.log("Audio retenido por el navegador. Esperando interacción.");
            });
        }

        // Animaciones de Scroll para los bloques, cuadro dorado e imágenes
        const elementos = document.querySelectorAll('.bloque, .bloque-cocteles, .animar-imagen');
        if (elementos.length > 0) {
            const observador = new IntersectionObserver((entradas) => {
                entradas.forEach(entrada => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add('visible');
                    } else {
                        if (entrada.intersectionRatio === 0) {
                            entrada.target.classList.remove('visible');
                        }
                    }
                });
            }, {
                threshold: [0.05, 0.15]
            });

            elementos.forEach(el => observador.observe(el));
        }
    }, 2000);
});