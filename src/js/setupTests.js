// Jest setup file for DOM testing
import '@testing-library/jest-dom';

// Mock tsParticles for testing
global.tsParticles = {
  load: jest.fn(),
  set: jest.fn(),
  addParticle: jest.fn(),
  removeParticle: jest.fn(),
  clear: jest.fn(),
  destroy: jest.fn(),
};

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
}); 