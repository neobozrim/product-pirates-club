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
    const typeformUrl = 'https://yavor3.typeform.com/to/TEEVd9YM';
    const buttons = document.querySelectorAll('.open-typeform');
    let typeformOverlay;

    function createTypeformOverlay() {
        typeformOverlay = document.createElement('div');
        typeformOverlay.className = 'typeform-overlay';
        typeformOverlay.innerHTML = `
            <iframe src="${typeformUrl}" class="typeform-iframe"></iframe>
            <span class="close-typeform">&times;</span>
        `;
        document.body.appendChild(typeformOverlay);

        const closeButton = typeformOverlay.querySelector('.close-typeform');
        closeButton.addEventListener('click', closeTypeform);
    }

    function openTypeform() {
        if (!typeformOverlay) {
            createTypeformOverlay();
        }
        typeformOverlay.style.display = 'block';
    }

    function closeTypeform() {
        typeformOverlay.style.display = 'none';
    }

    buttons.forEach(button => {
        button.addEventListener('click', openTypeform);
    });
});