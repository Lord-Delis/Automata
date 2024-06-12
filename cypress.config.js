const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://automata-backoffice-ui.digicoreltds.com/login',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 20000,
    pageLoadTimeout:40000,
    watchForFileChanges: true,
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: 'cypress/reports'

    }

    //env: {
    //  login_url: '/login',
   // },
  },
});
