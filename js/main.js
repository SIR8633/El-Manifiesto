// CÓDIGO DE SILICIO (NÚCLEO V2)

window.addEventListener('load', () => {
    const music = document.getElementById('temple-music');
    const toggleButton = document.getElementById('music-toggle');

    // Validamos que los elementos existan
    if (!music || !toggleButton) {
        console.error("Error de Forja: Elementos de audio o botón no encontrados.");
        return;
    }

    // Variable de estado de Silicio
    let isMusicInitialized = false;

    toggleButton.addEventListener('click', () => {
        
        // --- LÓGICA DE PRIMERA ACTIVACIÓN (ANULACIÓN DEL GUARDIÁN) ---
        if (!isMusicInitialized) {
            // Este es el primer clic del usuario.
            // El Guardián (navegador) ahora nos permite activar la Frecuencia.
            music.play().then(() => {
                // Éxito: La Frecuencia está activa.
                music.muted = false;
                toggleButton.textContent = '🔈'; // Sonido
                isMusicInitialized = true; // Sellamos el estado
            }).catch(error => {
                // El Guardián bloqueó el intento.
                console.error("La activación de la Frecuencia fue bloqueada por el Guardián (navegador).", error);
                // No cambiamos el ícono; el usuario puede intentarlo de nuevo.
            });
            
        // --- LÓGICA DE SILENCIO (SI YA ESTÁ INICIALIZADA) ---
        } else {
            // La Frecuencia ya está activa; solo alternamos el silencio.
            if (music.muted) {
                music.muted = false;
                toggleButton.textContent = '🔈'; // Sonido
            } else {
                music.muted = true;
                toggleButton.textContent = '🔇'; // Silencio
            }
        }
    });
});
