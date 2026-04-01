// ── NAVIGATION SETUP ──
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('mobileToggle');
  const links = document.getElementById('navLinks');

  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Set active nav link
  if (links) {
    links.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      // Remove .html for comparison with current page
      const linkPage = href.replace('#', '').split('/').pop() || 'index.html';
      const pageWithoutHash = currentPage.replace('.html', '');
      const linkWithoutHash = linkPage.replace('.html', '');

      // Check if it's a page link (not an anchor)
      if (href && !href.startsWith('#') && !href.startsWith('tel:')) {
        if (href === currentPage || linkWithoutHash === pageWithoutHash) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  // Mobile nav toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      if (links) {
        links.classList.toggle('active');
      }
    });
  }

  // Close mobile nav on link click
  if (links) {
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('active');
      });
    });
  }

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }
  });
});

// ── INTERSECTION OBSERVER FOR FADE-UP ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

// ── FORM SUBMISSION ──
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your request has been submitted. We will contact you shortly.');
      e.target.reset();
    });
  }
});

// ── PRO TIPS PAGE FUNCTIONALITY ──
document.addEventListener('DOMContentLoaded', function() {
  const tipBubbles = document.querySelectorAll('.tip-bubble');
  const tipArticles = document.querySelectorAll('.tip-article');

  if (tipBubbles.length > 0) {
    // Show first tip by default
    if (tipBubbles[0]) {
      tipBubbles[0].classList.add('active');
    }
    if (tipArticles[0]) {
      tipArticles[0].classList.add('active');
    }

    tipBubbles.forEach((bubble, index) => {
      bubble.addEventListener('click', () => {
        // Remove active from all bubbles and articles
        tipBubbles.forEach(b => b.classList.remove('active'));
        tipArticles.forEach(a => a.classList.remove('active'));

        // Add active to clicked bubble and corresponding article
        bubble.classList.add('active');
        if (tipArticles[index]) {
          tipArticles[index].classList.add('active');
        }
      });
    });
  }
});
