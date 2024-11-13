window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('headerBar');
    } else {
        header.classList.remove('headerBar');
    }
});