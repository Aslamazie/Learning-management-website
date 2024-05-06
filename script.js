(function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;
  
    function goToIndex(index) {
      currentIndex = (index + totalItems) % totalItems;
      const offset = -currentIndex * 100;
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
  
    setInterval(() => {
      goToIndex(currentIndex + 1);
    }, 3000); // Change slide every 3 seconds
  })();