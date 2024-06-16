const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
   baseUrl: 'https://automata-backoffice-ui.digicoreltds.com/login',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 20000,
    pageLoadTimeout:40000,
    watchForFileChanges: true,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }

    //env: {
    //  login_url: '/login',
   // },
  },
});
