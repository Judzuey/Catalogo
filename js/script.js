document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    let currentIndex = 0;

    const updateCarousel = () => {
        const itemWidth = items[0].clientWidth;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };

    const goToPrev = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    };

    const goToNext = () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    };

    prevButton.addEventListener('click', goToPrev);
    nextButton.addEventListener('click', goToNext);
    window.addEventListener('resize', updateCarousel);

    // Inicializar el carrusel al cargar la página
    updateCarousel();
});