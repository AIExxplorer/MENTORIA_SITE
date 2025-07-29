/**
 * Foco Digital Website - Main JavaScript Module
 * Handles mobile menu, animations, and particle effects
 */

// Mobile menu functionality
const initializeMobileMenu = () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  if (!hamburgerMenu || !navLinks) {
    console.warn('Mobile menu elements not found');
    return;
  }

  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  });

  // Close menu when nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburgerMenu.classList.remove('active');
      }
    });
  });
};

// Intersection Observer for fade-in animations
const initializeFadeInAnimations = () => {
  const fadeInElements = document.querySelectorAll('.fade-in');

  if (fadeInElements.length === 0) {
    return;
  }

  const observerOptions = {
    root: null, // Use viewport as observation area
    rootMargin: '0px',
    threshold: 0.1 // Element is considered visible when 10% is on screen
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, observerOptions);

  fadeInElements.forEach(el => {
    observer.observe(el);
  });
};

// Initialize tsParticles configuration
const initializeParticles = () => {
  if (typeof tsParticles === 'undefined') {
    console.warn('tsParticles not loaded');
    return;
  }

  const particlesConfig = {
    background: {
      color: {
        value: '#213649' // Main background color
      },
      image: 'linear-gradient(135deg, #213649 0%, #2E4A69 100%)' // Site gradient
    },
    fullScreen: {
      enable: true,
      zIndex: -1 // Ensure it stays in background
    },
    particles: {
      number: {
        value: 60, // Number of particles
        density: {
          enable: true,
        }
      },
      color: {
        value: "#ffffff" // Particle color
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 2 // Particle size
      },
      links: { // Former 'line_linked'
        enable: true,
        distance: 150, // Distance to create a line
        color: "#ffffff", // Line color
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2, // Movement speed
        direction: "none",
        outModes: { // Former 'out_mode'
          default: "out"
        }
      }
    },
    interactivity: {
      events: {
        onHover: { // Former 'onhover'
          enable: true,
          mode: "repulse"
        },
        onClick: { // Former 'onclick'
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100
        },
        push: {
          quantity: 4 // Former 'particles_nb'
        }
      }
    }
  };

  tsParticles.load('particles-js', particlesConfig);
};

// Main initialization function
const initializeApp = () => {
  initializeMobileMenu();
  initializeFadeInAnimations();
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Initialize particles when window loads
window.addEventListener('load', initializeParticles);

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeApp, initializeMobileMenu, initializeFadeInAnimations };
}