let lastScrollTop = 0;
const header = document.getElementById('header');
const delta = 10; // Adjust to set how much scroll is needed before hiding

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return; // Do nothing if not scrolled more than delta
    }

    if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
        // Scrolling down and past the header height
        header.style.top = '-100px'; // Adjust based on your header's height
    } else {
        // Scrolling up
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
