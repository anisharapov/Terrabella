document.addEventListener('DOMContentLoaded', () => {
    const carrousselContainer = document.querySelector('.carroussel-container');
    const items = document.querySelectorAll('.carroussel-item');
    let currentIndex = 0;

    function showNextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        carrousselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Change slide every 5 seconds
    setInterval(showNextItem, 5000);
});