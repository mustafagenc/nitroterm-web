// jest.setup.ts
import "@testing-library/jest-dom";

// Extend expect matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(...classNames: string[]): R;
    }
  }
}

// Mock navigator.clipboard
Object.defineProperty(navigator, "clipboard", {
  value: {
    writeText: jest.fn(),
  },
  writable: true,
});

// Mock window.open
Object.defineProperty(window, "open", {
  value: jest.fn(),
  writable: true,
});

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
} as any;

// Mock window.navigator.userAgent
Object.defineProperty(window.navigator, "userAgent", {
  value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
  writable: true,
});
