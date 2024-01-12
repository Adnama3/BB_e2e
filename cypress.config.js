const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    return{
      browsers: config.browsers.filter(
        (b) => b.family === 'chromium' 
      )
    }
    },
    baseUrl: 'https://automationintesting.online/'
  },
});
