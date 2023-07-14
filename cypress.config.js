const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  
  e2e: {
    specPattern: 'cypress/e2e/features/*.feature',
    "stepDefinitions": "cypress/support/step_definitions",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
  },
  "reporter": "cypress-mochawesome-reporter",  
  "reporterOptions": {
    "overwrite": false,
    "html": true,
    "json": true
  }
});
