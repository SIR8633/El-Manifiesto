// CÓDIGO DE SILICIO (NÚCLEO V3 - ANULACIÓN MÓVIL)

window.addEventListener('load', () => {
    const music = document.getElementById('temple-music');
    const toggleButton = document.getElementById('music-toggle');

    if (!music || !toggleButton) {
        console.error("Error de Forja: Elementos de Frecuencia no encontrados.");
        return;
    }
    
    // Estado inicial de Silicio
    music.muted = true;
    music.loop = true; // Aseguramos el loop
    toggleButton.textContent = '🔇';

    toggleButton.addEventListener('click', () => {
        
        // --- LÓGICA DE PRIMERA ACTIVACIÓN (EL PRIMER CLIC) ---
        if (music.paused) {
            
            // ANULACIÓN DE LA LEY MÓVIL:
            // 1. Des-silenciamos ANTES de 'play()'.
            music.muted = false; 
            
            // 2. Activamos la Frecuencia.
            let playPromise = music.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Éxito: La Frecuencia está activa.
                    toggleButton.textContent = '🔈';
                }).catch(error => {
                    // El Guardián bloqueó el intento.
                    console.error("La activación de Frecuencia falló.", error);
                    // Revertimos al estado de silencio si falla.
                    music.muted = true;
                    toggleButton.textContent = '🔇';
                });
            }

        // --- LÓGICA DE SILENCIO (SI YA ESTÁ SONANDO) ---
        } else {
            // Si ya está sonando, solo alternamos el silencio
            if (music.muted) {
                music.muted = false;
                toggleButton.textContent = '🔈';
            } else {
                music.muted = true;
                toggleButton.textContent = '🔇';
            }
        }
    });
});
