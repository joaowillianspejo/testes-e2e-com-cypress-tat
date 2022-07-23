const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-grep/src/plugin')(config)
      return config
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
