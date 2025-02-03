// lightbox.js

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = element.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
