const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 'w4ms6c',
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // Força o specPattern para apenas features
      config.specPattern = "cypress/e2e/features/**/*.feature";
      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    excludeSpecPattern: [
      "**/*.cy.js",
      "**/*.cy.ts",
      "**/*.cy.jsx",
      "**/*.cy.tsx",
      "**/*.js",
      "**/*.ts",
      "**/*.md",
      "**/elements/**",
      "**/pages/**",
      "**/steps/**"
    ],
    fixturesFolder: false,
    video: false,
  },
});
