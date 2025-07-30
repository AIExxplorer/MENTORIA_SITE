/**
 * Test suite for Foco Digital Website JavaScript functionality
 */

// Mock DOM elements for testing
const createMockElements = () => {
  document.body.innerHTML = `
    <div id="particles-js"></div>
    <header>
      <button class="hamburger" id="hamburger-menu">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav-links">
        <a href="#servicos">Serviços</a>
        <a href="#depoimentos">Depoimentos</a>
      </nav>
      <button class="theme-toggle" id="theme-toggle">
        <i class="fas fa-sun icon"></i>
        <span>Claro</span>
      </button>
    </header>
    <button class="contact-button" id="contact-button">
      <div class="icon"><i class="fas fa-comments"></i></div>
      Fale Conosco
    </button>
    <div class="fade-in">Test Element</div>
    <div class="testimonials-carousel">
      <div class="testimonials-container" id="testimonials-container">
        <div class="testimonial-slide">Slide 1</div>
        <div class="testimonial-slide">Slide 2</div>
        <div class="testimonial-slide">Slide 3</div>
      </div>
      <button class="carousel-btn" id="prev-btn">Previous</button>
      <button class="carousel-btn" id="next-btn">Next</button>
      <div class="carousel-indicators" id="carousel-indicators">
        <div class="carousel-indicator active" data-slide="0"></div>
        <div class="carousel-indicator" data-slide="1"></div>
        <div class="carousel-indicator" data-slide="2"></div>
      </div>
    </div>
  `;
};

describe('Foco Digital Website', () => {
  beforeEach(() => {
    createMockElements();
    // Reset theme
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.clear();
  });

  describe('Menu Functionality', () => {
    test('should toggle hamburger menu when clicked', () => {
      const hamburgerMenu = document.getElementById('hamburger-menu');
      const navLinks = document.querySelector('.nav-links');
      
      expect(navLinks.classList.contains('active')).toBe(false);
      expect(hamburgerMenu.classList.contains('active')).toBe(false);
      
      hamburgerMenu.click();
      
      expect(navLinks.classList.contains('active')).toBe(true);
      expect(hamburgerMenu.classList.contains('active')).toBe(true);
    });

    test('should close menu when nav link is clicked', () => {
      const hamburgerMenu = document.getElementById('hamburger-menu');
      const navLinks = document.querySelector('.nav-links');
      const navLink = navLinks.querySelector('a');
      
      // Open menu first
      hamburgerMenu.click();
      expect(navLinks.classList.contains('active')).toBe(true);
      
      // Click nav link
      navLink.click();
      
      expect(navLinks.classList.contains('active')).toBe(false);
      expect(hamburgerMenu.classList.contains('active')).toBe(false);
    });
  });

  describe('Theme Toggle Functionality', () => {
    test('should toggle theme from light to dark', () => {
      const themeToggle = document.getElementById('theme-toggle');
      const html = document.documentElement;
      
      expect(html.getAttribute('data-theme')).toBe('light');
      
      themeToggle.click();
      
      expect(html.getAttribute('data-theme')).toBe('dark');
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    test('should toggle theme from dark to light', () => {
      const themeToggle = document.getElementById('theme-toggle');
      const html = document.documentElement;
      
      html.setAttribute('data-theme', 'dark');
      
      themeToggle.click();
      
      expect(html.getAttribute('data-theme')).toBe('light');
      expect(localStorage.getItem('theme')).toBe('light');
    });

    test('should load saved theme from localStorage', () => {
      localStorage.setItem('theme', 'dark');
      
      // Recreate elements to trigger initialization
      createMockElements();
      
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    test('should update theme toggle UI correctly', () => {
      const themeToggle = document.getElementById('theme-toggle');
      const icon = themeToggle.querySelector('.icon');
      const text = themeToggle.querySelector('span');
      
      // Initial state (light theme)
      expect(icon.className).toContain('fa-sun');
      expect(text.textContent).toBe('Claro');
      
      // Toggle to dark
      themeToggle.click();
      expect(icon.className).toContain('fa-moon');
      expect(text.textContent).toBe('Escuro');
    });
  });

  describe('Contact Button Functionality', () => {
    test('should open WhatsApp when contact button is clicked', () => {
      const contactButton = document.getElementById('contact-button');
      const originalOpen = window.open;
      const mockOpen = jest.fn();
      window.open = mockOpen;
      
      contactButton.click();
      
      expect(mockOpen).toHaveBeenCalledWith(
        expect.stringContaining('wa.me/5531999999999'),
        '_blank'
      );
      
      window.open = originalOpen;
    });
  });

  describe('Testimonials Carousel Functionality', () => {
    test('should move to next slide when next button is clicked', () => {
      const nextBtn = document.getElementById('next-btn');
      const container = document.getElementById('testimonials-container');
      
      expect(container.style.transform).toBe('');
      
      nextBtn.click();
      
      expect(container.style.transform).toBe('translateX(-100%)');
    });

    test('should move to previous slide when prev button is clicked', () => {
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const container = document.getElementById('testimonials-container');
      
      // Move to second slide first
      nextBtn.click();
      expect(container.style.transform).toBe('translateX(-100%)');
      
      // Then go back
      prevBtn.click();
      expect(container.style.transform).toBe('translateX(0%)');
    });

    test('should disable prev button on first slide', () => {
      const prevBtn = document.getElementById('prev-btn');
      
      expect(prevBtn.disabled).toBe(true);
    });

    test('should disable next button on last slide', () => {
      const nextBtn = document.getElementById('next-btn');
      
      // Move to last slide
      nextBtn.click(); // Slide 1
      nextBtn.click(); // Slide 2
      
      expect(nextBtn.disabled).toBe(true);
    });

    test('should update indicators when slide changes', () => {
      const nextBtn = document.getElementById('next-btn');
      const indicators = document.querySelectorAll('.carousel-indicator');
      
      expect(indicators[0].classList.contains('active')).toBe(true);
      expect(indicators[1].classList.contains('active')).toBe(false);
      
      nextBtn.click();
      
      expect(indicators[0].classList.contains('active')).toBe(false);
      expect(indicators[1].classList.contains('active')).toBe(true);
    });

    test('should go to specific slide when indicator is clicked', () => {
      const indicators = document.querySelectorAll('.carousel-indicator');
      const container = document.getElementById('testimonials-container');
      
      indicators[2].click(); // Go to slide 3
      
      expect(container.style.transform).toBe('translateX(-200%)');
      expect(indicators[2].classList.contains('active')).toBe(true);
    });
  });

  describe('Intersection Observer', () => {
    test('should add visible class to fade-in elements when they intersect', () => {
      const fadeInElement = document.querySelector('.fade-in');
      
      expect(fadeInElement.classList.contains('visible')).toBe(false);
      
      // Simulate intersection
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      });
      
      observer.observe(fadeInElement);
      
      // Trigger intersection
      const mockEntry = {
        target: fadeInElement,
        isIntersecting: true
      };
      
      observer.callback([mockEntry], observer);
      
      expect(fadeInElement.classList.contains('visible')).toBe(true);
    });
  });

  describe('tsParticles Integration', () => {
    test('should initialize particles with correct configuration', () => {
      // Mock tsParticles
      global.tsParticles = {
        load: jest.fn()
      };
      
      // Call the function
      const { initializeParticles } = require('./script.js');
      initializeParticles();
      
      expect(global.tsParticles.load).toHaveBeenCalledWith(
        'particles-js',
        expect.objectContaining({
          background: expect.any(Object),
          particles: expect.any(Object),
          interactivity: expect.any(Object)
        })
      );
    });

    test('should handle missing tsParticles gracefully', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      // Remove tsParticles
      delete global.tsParticles;
      
      const { initializeParticles } = require('./script.js');
      initializeParticles();
      
      expect(consoleSpy).toHaveBeenCalledWith('tsParticles not loaded');
      
      consoleSpy.mockRestore();
    });
  });

  describe('Smooth Scrolling', () => {
    test('should prevent default and scroll to target when anchor link is clicked', () => {
      document.body.innerHTML += '<a href="#test">Test Link</a><div id="test">Target</div>';
      
      const link = document.querySelector('a[href="#test"]');
      const target = document.getElementById('test');
      const scrollIntoViewSpy = jest.spyOn(target, 'scrollIntoView');
      
      const event = new Event('click');
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
      
      link.dispatchEvent(event);
      
      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(scrollIntoViewSpy).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}); 