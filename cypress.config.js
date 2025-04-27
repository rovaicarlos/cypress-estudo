const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
      mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatorio de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  
  chromewebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/', 
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on)
  },
  },
});