window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('headerBar');
    } else {
        header.classList.remove('headerBar');
    }
});

const swiper = new Swiper('.portfolioSlider', {
    autoplay: {
        pauseOnMouseEnter: true,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    grid: {
        fill: 'row',
        rows: 2,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

