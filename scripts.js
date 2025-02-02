// Carrossel de Imagens
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Troca de imagem a cada 3 segundos
