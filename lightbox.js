function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = element.src;
    lightbox.classList.add('fade-in'); // Add fade-in effect
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('fade-in'); // Remove fade-in effect
    lightbox.classList.add('fade-out'); // Add fade-out effect
    setTimeout(() => {
        lightbox.style.display = 'none';
        lightbox.classList.remove('fade-out'); // Remove fade-out effect
    }, 300); // Match duration with CSS transition
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});
