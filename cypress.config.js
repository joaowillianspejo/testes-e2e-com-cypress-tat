const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    projectId: 'ni67d9',

    baseUrl: 'https://notes-serverless-app.com',

    env: {
      viewportWidthBreakpoint: 768
    },

    experimentalSessionAndOrigin: true,
    experimentalStudio: true,

    chromeWebSecurity: false,
  },
})
