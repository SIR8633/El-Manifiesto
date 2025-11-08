// CÓDIGO DE SILICIO (NÚCLEO V1)

window.addEventListener('load', () => {
    const music = document.getElementById('temple-music');
    const toggleButton = document.getElementById('music-toggle');

    // Validamos que los elementos existan antes de operar
    if (music && toggleButton) {
        
        // Inicializamos la música como silenciada (buena práctica)
        music.muted = true;
        toggleButton.textContent = '🔇'; // Silencio

        toggleButton.addEventListener('click', () => {
            if (music.paused) {
                // Si está pausada (incluyendo la 1ra vez), la iniciamos
                // Usamos .play() que devuelve una promesa, para manejar errores de autoplay
                music.play().then(() => {
                    music.muted = false;
                    toggleButton.textContent = '🔈'; // Sonido
                }).catch(error => {
                    // El navegador bloqueó el autoplay. Esto es normal.
                    // La próxima interacción del usuario (otro clic) debería funcionar.
                    console.warn("Autoplay bloqueado por el navegador. Se requiere interacción del usuario.");
                });
            } else {
                // Si ya está sonando, solo alternamos el silencio
                if (music.muted) {
                    music.muted = false;
                    toggleButton.textContent = '🔈'; // Sonido
                } else {
                    music.muted = true;
                    toggleButton.textContent = '🔇'; // Silencio
                }
            }
        });
    }
});
```eof
