import '@testing-library/jest-dom';

export default {
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./setupTests.js'], // Ensure this path matches your project's structure
    },
};