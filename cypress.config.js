const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatorio de testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
     env: {
      apiUrl: 'http://localhost:3000' 
    },
    // Padronização de paths
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});