const zoomableImage = document.getElementById('zoomable-image');

zoomableImage.addEventListener('click', () => {
    zoomableImage.classList.toggle('zoomed'); // Ajoute ou supprime la classe "zoomed" au clic sur l'image
});

// Ajouter un gestionnaire d'événements au document pour gérer le clic en dehors de l'image
document.addEventListener('click', (event) => {
    if (!zoomableImage.contains(event.target)) {
        zoomableImage.classList.remove('zoomed'); // Retirer la classe "zoomed" si l'élément cliqué n'est pas l'image
    }
});

