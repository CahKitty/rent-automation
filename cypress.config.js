const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://seubarriga.wcaquino.me/login'
  },
    retries:{
     runMode: 2,
     openMode: 1
  }
});
