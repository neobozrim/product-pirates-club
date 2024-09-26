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

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get the button by its ID
  const scrollButton = document.getElementById('scroll-button');
  
  // Add click event listener
  scrollButton.addEventListener('click', function() {
    // Scroll to the target section smoothly
    document.getElementById('target-section').scrollIntoView({
      behavior: 'smooth'  // Enables smooth scrolling
    });
  });
});

// TYPEFORM
document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector('.typeform-overlay');
    var openButtons = document.querySelectorAll('.open-typeform');
    var closeButton = document.querySelector('.close-typeform');

    function openTypeform() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeTypeform() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    openButtons.forEach(function(button) {
        button.addEventListener('click', openTypeform);
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeTypeform);
    }

    // Remove any automatic opening functionality
    // The Typeform will now only open when a button is clicked
});