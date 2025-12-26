const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w4ms6c',
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    fixturesFolder: false,
    video: false,
  },
});
