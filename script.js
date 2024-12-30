// Esempi di JavaScript:
// Effetto di parallasse per l'immagine di sfondo
const heroImage = document.getElementById('hero-image');
window.addEventListener('scroll', () => {
    heroImage.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});

// Menu a scomparsa per dispositivi mobili
// ...

// Effetti di animazione con CSS o librerie come Animate.css
// ...