/**
 * Foco Digital Website - Main JavaScript Module
 * Handles mobile menu, animations, particle effects, theme toggle, contact button, and testimonials carousel
 */

// Theme management
const initializeThemeToggle = () => {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const icon = themeToggle?.querySelector('.icon');
  const text = themeToggle?.querySelector('span');

  if (!themeToggle) {
    console.warn('Theme toggle not found');
    return;
  }

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeUI(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
    
    // Reinitialize particles with new theme colors
    initializeParticles();
  });

  function updateThemeUI(theme) {
    if (icon) {
      icon.className = theme === 'light' ? 'fas fa-moon icon' : 'fas fa-sun icon';
    }
    if (text) {
      text.textContent = theme === 'light' ? 'Escuro' : 'Claro';
    }
  }
};

// Contact button functionality
const initializeContactButton = () => {
  const contactButton = document.getElementById('contact-button');

  if (!contactButton) {
    console.warn('Contact button not found');
    return;
  }

  contactButton.addEventListener('click', () => {
    // You can customize this to open a chat widget, WhatsApp, or contact form
    const phoneNumber = '5531999999999';
    const message = 'Olá! Gostaria de saber mais sobre os serviços da Foco Digital.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Alternative: Show a contact modal or redirect to contact section
    // document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  });
};

// Testimonials carousel functionality
const initializeTestimonialsCarousel = () => {
  const container = document.getElementById('testimonials-container');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const indicators = document.querySelectorAll('.carousel-indicator');

  if (!container || !prevBtn || !nextBtn) {
    console.warn('Carousel elements not found');
    return;
  }

  let currentSlide = 0;
  const slides = container.querySelectorAll('.testimonial-slide');
  const totalSlides = slides.length;

  function updateCarousel() {
    const translateX = -currentSlide * 100;
    container.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
    
    // Update button states
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  }

  function goToSlide(slideIndex) {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      currentSlide = slideIndex;
      updateCarousel();
    }
  }

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });

  // Auto-play carousel
  let autoPlayInterval;
  
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      if (currentSlide < totalSlides - 1) {
        nextSlide();
      } else {
        currentSlide = 0;
        updateCarousel();
      }
    }, 5000); // Change slide every 5 seconds
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
  }

  // Start auto-play and handle pause on hover
  startAutoPlay();
  
  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);

  // Initialize carousel state
  updateCarousel();
};

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

// Initialize tsParticles configuration with high-tech effects
const initializeParticles = () => {
  if (typeof tsParticles === 'undefined') {
    console.warn('tsParticles not loaded');
    return;
  }

  const getThemeColors = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
      background: isDark ? '#0a0a0a' : '#f8f9fa',
      particles: isDark ? ['#FF6B35', '#FF8E53', '#00d4aa', '#533483'] : ['#1a1a2e', '#16213e', '#0f3460', '#533483'],
      links: isDark ? '#FF6B35' : '#533483',
      accent: isDark ? '#00d4aa' : '#FF6B35'
    };
  };

  const colors = getThemeColors();

  const particlesConfig = {
    background: {
      color: {
        value: colors.background
      }
    },
    fullScreen: {
      enable: true,
      zIndex: -3
    },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: colors.particles
      },
      shape: {
        type: ["circle", "triangle", "star"],
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: colors.links,
        opacity: 0.6,
        width: 1,
        triangles: {
          enable: true,
          color: colors.accent,
          opacity: 0.15
        }
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        },
        trail: {
          enable: true,
          length: 15,
          fillColor: colors.background
        }
      },
      life: {
        duration: {
          sync: false,
          value: 20
        },
        count: 1
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: ["repulse", "bubble", "connect"]
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        bubble: {
          distance: 200,
          size: 40,
          duration: 2,
          opacity: 0.8
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true,
    fps_limit: 60,
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1
      },
      rate: {
        delay: 0.15,
        quantity: 1
      },
      size: {
        width: 100,
        height: 10
      },
      position: {
        y: 100,
        x: 50
      }
    }
  };

  tsParticles.load('particles-js', particlesConfig);
};

// Smooth scrolling for anchor links
const initializeSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Add parallax effect to hero section
const initializeParallaxEffect = () => {
  const hero = document.getElementById('hero');
  
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  });
};

// Add floating animation to service cards
const initializeFloatingAnimation = () => {
  const serviceCards = document.querySelectorAll('.servico-card');
  
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.classList.add('floating');
  });
};

// Add CSS for floating animation
const addFloatingCSS = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floating {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    .floating {
      animation: floating 3s ease-in-out infinite;
    }
    
    .floating:hover {
      animation-play-state: paused;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .pulse {
      animation: pulse 2s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
};

// Add pulse animation to CTA buttons
const initializePulseAnimation = () => {
  const ctaButtons = document.querySelectorAll('.cta-button');
  
  ctaButtons.forEach(button => {
    button.classList.add('pulse');
  });
};

// Add high-tech dynamic background effects
const initializeDynamicBackgrounds = () => {
  // Add mouse tracking effect to hero section
  const hero = document.getElementById('hero');
  
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      hero.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
    });
    
    hero.addEventListener('mouseleave', () => {
      hero.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }

  // Add scroll-triggered background effects
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
        const progress = (window.innerHeight - sectionTop) / (window.innerHeight + sectionHeight);
        section.style.setProperty('--scroll-progress', progress);
      }
    });
  });
};

// Add high-tech gradient animation effects
const initializeGradientEffects = () => {
  // Create animated gradient overlays
  const gradientSections = document.querySelectorAll('.gradient-bg');
  
  gradientSections.forEach(section => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, 
        rgba(255, 107, 53, 0.08) 0%, 
        rgba(0, 212, 170, 0.08) 25%, 
        rgba(83, 52, 131, 0.08) 50%, 
        rgba(255, 142, 83, 0.08) 75%, 
        rgba(255, 107, 53, 0.08) 100%);
      background-size: 400% 400%;
      animation: gradientShift 10s ease infinite;
      pointer-events: none;
      z-index: 0;
    `;
    
    section.style.position = 'relative';
    section.appendChild(overlay);
    
    // Ensure content stays above overlay
    const content = section.querySelector('.container');
    if (content) {
      content.style.position = 'relative';
      content.style.zIndex = '1';
    }
  });
  
  // Add gradient shift animation
  const gradientStyle = document.createElement('style');
  gradientStyle.textContent = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;
  document.head.appendChild(gradientStyle);
};

// Add high-tech pattern animation
const initializeTechEffects = () => {
  const techSections = document.querySelectorAll('.tech-bg');
  
  techSections.forEach(section => {
    // Add tech grid overlay
    const gridOverlay = document.createElement('div');
    gridOverlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(255, 107, 53, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 107, 53, 0.02) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: techGridMove 20s linear infinite;
      pointer-events: none;
      z-index: 0;
    `;
    
    section.style.position = 'relative';
    section.appendChild(gridOverlay);
    
    // Ensure content stays above overlay
    const content = section.querySelector('.container');
    if (content) {
      content.style.position = 'relative';
      content.style.zIndex = '1';
    }
  });
  
  // Add tech grid animation
  const techStyle = document.createElement('style');
  techStyle.textContent = `
    @keyframes techGridMove {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 50px 50px;
      }
    }
  `;
  document.head.appendChild(techStyle);
};

// Main initialization function
const initializeApp = () => {
  addFloatingCSS();
  initializeThemeToggle();
  initializeContactButton();
  initializeTestimonialsCarousel();
  initializeMobileMenu();
  initializeFadeInAnimations();
  initializeSmoothScrolling();
  initializeParallaxEffect();
  initializeFloatingAnimation();
  initializePulseAnimation();
  initializeDynamicBackgrounds();
  initializeGradientEffects();
  initializeTechEffects();
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Initialize particles when window loads
window.addEventListener('load', initializeParticles);

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    initializeApp, 
    initializeMobileMenu, 
    initializeFadeInAnimations,
    initializeThemeToggle,
    initializeContactButton,
    initializeTestimonialsCarousel
  };
}