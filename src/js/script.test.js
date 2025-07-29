/**
 * @jest-environment jsdom
 */

import { initializeApp } from './script.js';

describe('Foco Digital Website', () => {
  let document;

  beforeEach(() => {
    document = window.document;
    document.body.innerHTML = `
      <div id="hamburger-menu"></div>
      <nav class="nav-links"></nav>
      <div class="fade-in"></div>
      <div class="fade-in"></div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('Menu Functionality', () => {
    test('should toggle hamburger menu when clicked', () => {
      const hamburgerMenu = document.getElementById('hamburger-menu');
      const navLinks = document.querySelector('.nav-links');

      // Simulate click
      hamburgerMenu.click();

      expect(navLinks.classList.contains('active')).toBe(true);
      expect(hamburgerMenu.classList.contains('active')).toBe(true);
    });

    test('should close menu when nav link is clicked', () => {
      const hamburgerMenu = document.getElementById('hamburger-menu');
      const navLinks = document.querySelector('.nav-links');
      const navLink = document.createElement('a');
      navLinks.appendChild(navLink);

      // Open menu first
      hamburgerMenu.click();
      expect(navLinks.classList.contains('active')).toBe(true);

      // Click nav link
      navLink.click();
      expect(navLinks.classList.contains('active')).toBe(false);
      expect(hamburgerMenu.classList.contains('active')).toBe(false);
    });
  });

  describe('Intersection Observer', () => {
    test('should add visible class to fade-in elements when observed', () => {
      const fadeInElements = document.querySelectorAll('.fade-in');
      
      // Mock IntersectionObserver callback
      const mockCallback = jest.fn((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      });

      // Simulate intersection
      const mockEntry = {
        isIntersecting: true,
        target: fadeInElements[0]
      };

      mockCallback([mockEntry]);

      expect(fadeInElements[0].classList.contains('visible')).toBe(true);
    });
  });

  describe('tsParticles Integration', () => {
    test('should initialize tsParticles with correct configuration', () => {
      const mockTsParticles = {
        load: jest.fn()
      };
      global.tsParticles = mockTsParticles;

      // Trigger load event
      window.dispatchEvent(new Event('load'));

      expect(mockTsParticles.load).toHaveBeenCalledWith('particles-js', expect.any(Object));
    });
  });
}); 