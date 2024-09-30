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

// ------------------ Cookie Consent Banner Script -------------------
// Cookie Consent Banner Script
document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies');
  const declineCookiesBtn = document.getElementById('decline-cookies');

  // Check if the user has previously accepted or declined cookies
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'block';
  } else {
    // If cookies are accepted, initialize analytics and tracking scripts
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      initializeTrackingScripts();
    }
  }

  acceptCookiesBtn.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
    initializeTrackingScripts();
  });

  declineCookiesBtn.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'false');
    cookieBanner.style.display = 'none';
  });

  function initializeTrackingScripts() {
    // Initialize Hotjar
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 5150723, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = true; // Ensure async loading
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

    // Initialize Amplitude
    (function () {
      const amplitudeScript = document.createElement('script');
      amplitudeScript.src =
        'https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz';
      amplitudeScript.async = true;
      amplitudeScript.onload = function () {
        // Session Replay Plugin
        const sessionReplayScript = document.createElement('script');
        sessionReplayScript.src =
          'https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.6.22-min.js.gz';
        sessionReplayScript.async = true;
        sessionReplayScript.onload = function () {
          window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
        };
        document.head.appendChild(sessionReplayScript);

        window.amplitude.init('f49389884fe945fa25f3f44a57af1bc7', {
          autocapture: { elementInteractions: true },
        });
      };
      document.head.appendChild(amplitudeScript);
    })();

    // Initialize Google Analytics
    (function () {
      const gaScript = document.createElement('script');
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-N095ZGW8QF';
      gaScript.async = true;
      gaScript.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-N095ZGW8QF');
      };
      document.head.appendChild(gaScript);
    })();
  }
});

// Scroll to Section Script
document.getElementById('scroll-button').addEventListener('click', function () {
  document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
});

// Typeform Modal Script
const openTypeformButtons = document.querySelectorAll('.open-typeform');
const typeformOverlay = document.createElement('div');
typeformOverlay.classList.add('typeform-overlay');

const typeformIframe = document.createElement('iframe');
typeformIframe.classList.add('typeform-iframe');
typeformIframe.src = 'https://your-typeform-url'; // Replace with your actual Typeform URL

const closeTypeformButton = document.createElement('div');
closeTypeformButton.classList.add('close-typeform');
closeTypeformButton.innerHTML = '&times;';

typeformOverlay.appendChild(typeformIframe);
typeformOverlay.appendChild(closeTypeformButton);
document.body.appendChild(typeformOverlay);

openTypeformButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    typeformOverlay.style.display = 'block';
  });
});

closeTypeformButton.addEventListener('click', function () {
  typeformOverlay.style.display = 'none';
});
